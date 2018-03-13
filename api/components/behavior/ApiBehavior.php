<?php

namespace api\components\behavior;

use yii;
use api\components\ApiController;
use yii\base\Behavior;
use common\components\EjjEncryption;

class ApiBehavior extends Behavior
{

  /**
   * 接口的参数
   * @var type
   */
  public $sucParams = [
      'test' => ['a', 'b', 'c'],
      'order-detail' => ['orderCode'],
      'todo-orders' => ['workerId', 'pageNum', 'orderBookedBeginTime', 'dayType'],
      'done-orders' => ['workerId', 'pageNum', 'orderBookedEndTime'],
      'tobao-orders' => ['workerId'],
      'send-order' => ['workerId', 'orderId', 'lng', 'lat', 'device_no','declaration'],
      'append-order' => ['workerId', 'orderCode', 'orderChannelName', 'orderAppendBookedCount'],
      'get-order-detail-bycode' => ['order_codes'],
      'get-order-detail-byfilter' => ['user_id','status'],
      'up-order-status' => ['bill_id','customer_status','worker_status','operate_status'],
      'get-order-detail'=> ['order_codes','worker_id'],
      'get-payment-view' =>['id'],
      'payment-list' =>['per_page', 'page', 'filter'],
      'pay-auto-receive' =>['v_oid', 'pay_type', 'pay_channel', 'trade_no', 'out_trade_no'],
      'get-notsettled-order'=>['worker_id','start_time','end_time','order_codes','page','pagenum','is_count'],
      'get-worker-order'=>['workerId','startTime','endTime', 'type'],
      'get-latest-company-name' => ['bill_id'],
      'get-order-info-by-boss' => ['user_id','worker_id','star_time','end_time']
  ];

  public function events()
  {
    return [
        ApiController::EVENT_CHECKPARAMS => 'eventCheckParams',
//        ApiController::EVENT_BEFORE_CHECK => 'eventBeforeCheck',
    ];
  }

  public function eventCheckParams($event)
  {
    $owner = $this->owner;
    $arrParams = [];
    $arrParams['sign'] = isset($event->params["sign"]) ? $event->params["sign"] : "";
    $arrParams['nonce'] = isset($event->params["nonce"]) ? $event->params["nonce"] : "";
    $arrParams['api_key'] = isset($event->params["api_key"]) ? $event->params["api_key"] : "";
    unset($event->params['sign'], $event->params['nonce'], $event->params['api_key']);
    foreach ($event->params as $k => $v) {
      if (!in_array($k, $this->sucParams[$event->actionId])) {
        return $owner->returnMsg(40003, $owner->getCode[40003] . $k, '', $owner->getCode[40003] . $k);
      }
    }
    $arrParams = array_merge($arrParams, $event->params);
    $this->__checkParams($arrParams);
  }

  public function eventBeforeCheck($event)
  {
    $owner = $this->owner;
    if (Yii::$app->request->getIsPost()) {
      $params = Yii::$app->request->post() or json_decode(Yii::$app->request->getRawBody(), true);
      $event = new checkParamsEvent;
      $event->params = $params;
      $event->actionId = $this->action->id;
      $this->trigger(self::EVENT_CHECKPARAMS, $event);
      $owner->params = $event->params;
    } else {
      $owner->returnMsg(40001, $owner->getCode[40001], '', $owner->getCode[40001]);
    }
  }

  /**
   * 检查参数
   * @param type $params
   * @return type
   */
  protected function __checkParams($arrParams)
  {
    $owner = $this->owner;
    if ($owner->type) {
      $objSign = new EjjEncryption($owner->api_key[$owner->type], $owner->secret_key[$owner->type]);
      $bolCheck = $objSign->checkSignature($arrParams);
      if (!$bolCheck) {
        return $owner->returnMsg(40002, $owner->getCode[40002], '', $owner->getCode[40002]);
      }
    } else {
      return $owner->returnMsg(40012, $owner->getCode[40012], '', $owner->getCode[40012]);
    }
  }

  /*
   * 过虑数组的值、为每个值加上单引号
   * */

  public static function filterArray($val)
  {
    return "'" . $val . "'";
  }

}

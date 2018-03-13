<?php

namespace api\components;

use Yii;
use api\components\event\returnEvent;
use api\components\event\checkParamsEvent;
use api\components\behavior\ApiBehavior;
use common\components\EjjEncryption;

class ApiController extends \yii\web\Controller
{

  /**
   * 事件
   */
//  const EVENT_RETURN = 'event_return'; //返回信息事件
  const EVENT_BEFORE_CHECK = 'event_before_check'; //返回信息事件
  const EVENT_CHECKPARAMS = 'event_checkparams'; //检查是否为该接口的事件

  /**
   * 公共钥匙
   */

  public $api_key = [
      'caiwu' => 'caiwu-to-boss',
      'tongyi' => 'tongyi-to-boss',
  ];

  /**
   * 私钥
   */
  public $secret_key = [
      'caiwu' => 'private-caiwu-to-boss',
      'tongyi' => 'private-tongyi-to-boss',
  ];
  public $type = '';
  public $params = [];
  public $returnMsg = ['code' => '', 'msg' => '', 'ret' => '', 'alertMsg' => ''];
  public $enGet = [
      'payment-list',
      'get-payment-view',
  ];
  public $getCode = [
      '40000' => '成功',
      '40001' => '不是post传参',
      '40002' => '签名失败',
      '40003' => '参数名有误：',
      '40004' => '参数格式不对',
      '40005' => '影响行数',
      '40006' => '报单失败',
      '40007' => '更改子订单状态失败',
      '40008' => '补单调用子庚的指派接口失败',
      '40009' => '补单插入订单表失败',
      '40010' => '补单时长不是数字类型',
      '40011' => '该订单或该订单的补单已经报单',
      '40012' => '找不到type值',
      '40013' => '账单已支付',
      '40014' => '账单支付状态异常',
      '40015' => '更新返现交易记录状态失败',
      '40016' => '更新交易记录状态失败',
      '40017' => '更新用户余额异常',
      '40018' => '录入余额变更记录失败',
      '40019' => '失败',
      '40020' => '该订单或该订单的补单已经报单',
      '40021' => '该订单不是原始订单',
      '40022' => '没有未报单的订单',
      '40023' => '时间戳参数不正确',
      '40024' => '该账单ID不存在',
      '40025' => '该支付账单不存在',
  ];

  public function __construct($id, $module, $config = array())
  {
    Yii::info($_SERVER['REQUEST_URI'], 'ecapi');
    parent::__construct($id, $module, $config);
  }

  public function beforeAction($action)
  {
    return parent::beforeAction($action);
  }

  public function behaviors()
  {
    return[
        'apiBehavior' => [
            'class' => ApiBehavior::className()
        ]
    ];
  }

  /**
   * 返回信息
   * @param type $code
   * @param type $msg
   * @param type $ret
   * @param type $alertMsg
   * @return type
   */
  public function returnMsg($code, $msg, $ret, $alertMsg)
  {
    $this->returnMsg['code'] = $code;
    $this->returnMsg['msg'] = $msg;
    $this->returnMsg['ret'] = $ret;
    $this->returnMsg['alertMsg'] = $alertMsg;
    Yii::info(json_encode($this->returnMsg), 'ecapi');
    exit(json_encode($this->returnMsg));
  }

  /**
   * 判断有没有授权项目，并已授权，如果有则运行权限管理
   * @see \yii\web\Controller::beforeAction()
   */
  public function beforeCheck()
  {
    $flag = FALSE;
    if (Yii::$app->request->getIsPost() || ($flag = in_array($this->action->id, $this->enGet))) {
      if ($flag) {
        $params = Yii::$app->request->get();
      } else {
        $params = Yii::$app->request->post() or json_decode(Yii::$app->request->getRawBody(), true);
      }
      $event = new checkParamsEvent;
      $event->params = $params;
      $event->actionId = $this->action->id;
      $this->trigger(self::EVENT_CHECKPARAMS, $event);
      $this->params = $event->params;
    } else {
      $this->returnMsg(40001, $this->getCode[40001], '', $this->getCode[40001]);
    }
  }

}

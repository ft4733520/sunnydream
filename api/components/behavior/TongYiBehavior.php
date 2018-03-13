<?php

namespace api\components\behavior;

use yii;
use api\controllers\tongyi\TongYiController;
use yii\base\Behavior;
use common\components\EjjEncryption;
use common\models\CommonUserOrder;
use yii\helpers\ArrayHelper;

class TongYiBehavior extends Behavior
{

  public function events()
  {
    return [
        TongYiController::EVENT_IS_REPORT => 'eventIsReport',
        TongYiController::EVENT_IS_REPORT2 => 'eventIsReport2'
    ];
  }

  /**
   * 报单接口判断是否可以报单
   * @param type $event
   * @throws yii\web\ServerErrorHttpException
   */
  public function eventIsReport($event)
  {
    $owner = $this->owner;
    $params = $event->sender->params;
    if (!CommonUserOrder::find()->where(['id' => $params['orderId'], 'is_supplemented' => 0])->asArray()->all()) {
      $owner->returnMsg(40021, $owner->getCode[40021], '', $owner->getCode[40021]);
    }

    if (($r = CommonUserOrder::find()->select('id,bill_id,status')->where(['id' => $params['orderId']])->orWhere(['parent_id' => $params['orderId']])->asArray()->all()) &&
            \api\models\UserOrderReport::find()->where(['in', 'order_id', ArrayHelper::getColumn($r, 'id')])->count('*') == 0) {
      $event->data = [
          'r' => $r
      ];
      return true;
    } else {
      $owner->returnMsg(40020, $owner->getCode[40020], '', $owner->getCode[40020]);
    }
  }

  /**
   * 补单接口判断是否可以报单
   * @param type $event
   * @throws yii\web\ServerErrorHttpException
   */
  public function eventIsReport2($event)
  {
    $owner = $this->owner;
    $params = $event->sender->params;
    $r = CommonUserOrder::find()->select('id')->where(['order_code' => $params['orderCode']])->asArray()->one();
    $orderId = $r['id'];
    if (($r = CommonUserOrder::find()->select('id,order_code')->where(['id' => $orderId])->orWhere(['parent_id' => $orderId])->asArray()->all()) &&
            in_array($orderId, ArrayHelper::getColumn($r, 'id')) &&
            \api\models\UserOrderReport::find()->where(['in', 'order_id', ArrayHelper::getColumn($r, 'id')])->count('*') == 0) {
      $event->data = [
          'r' => $r
      ];
      return true;
    } else {
      $owner->returnMsg(40020, $owner->getCode[40020], '', $owner->getCode[40020]);
    }
  }

}

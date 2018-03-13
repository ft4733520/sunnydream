<?php

namespace api\components\event;

use yii;
use yii\base\Event;

class returnEvent extends Event
{
  /**
   * 代号
   * @var type
   */
  public $code;
  /**
   * 信息
   * @var type
   */
  public $msg;
  /**
   * 返回的数据
   * @var type
   */
  public $ret;
  /**
   * 弹出框信息
   * @var type
   */
  public $alertMsg;
  

}

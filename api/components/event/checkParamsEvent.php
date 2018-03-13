<?php

namespace api\components\event;

use yii;
use yii\base\Event;

class checkParamsEvent extends yii\base\Event
{
  public $params;
  public $actionId;

}

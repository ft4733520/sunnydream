<?php

namespace api\controllers;

use yii;
use common\components\CommonUtil;
use api\components\ApiController;
use common\components\EjjEncryption;
class TestController extends ApiController
{
  public function actionTest()
  {
    die('123');
  }

  public function actionTestApi()
  {
    header('Access-Control-Allow-Origin:*');
    $url = Yii::$app->request->get('url');
    $params = $_POST;
    foreach ($params as $k => $v) {
      if (is_array($v)) {
        $params[$k] = json_encode($v);
      }
    }
    $url = 'http://' . $url;
    $params = $this->pkgParams($params);
    $re = CommonUtil::httpRequest($url, 'post', $params);
    echo $re;exit;
  }

  public function pkgParams($params)
  {
    $e = new EjjEncryption('tongyi-to-boss', 'private-tongyi-to-boss');
    return $e->signature($params);
  }

}

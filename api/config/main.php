<?php
$params = array_merge(
        require(__DIR__ . '/../../common/config/params.php'), require(__DIR__ . '/../../common/config/params-local.php'), require(__DIR__ . '/params-local.php')
);
return [
    'id' => 'app-api',
    'basePath' => dirname(__DIR__),
    'bootstrap' => ['log'],
    'aliases' => [
        '@api' => '@app',
    ],
    'controllerNamespace' => 'api\controllers',
    
    // 'modules' => [
    //     'user' => [
    //         'class' => 'api\modules\user\Module',
    //     ],
    // ],
    'components' => [
        'urlManager' => [
            'enablePrettyUrl' => true,
//            'enableStrictParsing' => true,
            'showScriptName' => false,
            'rules' => [
                ['class' => 'yii\rest\UrlRule',
                 'controller' => [
                        'product',
                        'user',
                    ],
                ],
                [
                    'class' => 'yii\rest\UrlRule',
                    'controller' => 'wechat',
                    'extraPatterns' => [
                        'GET valid' => 'valid',
                        'GET accesstoken' => 'accesstoken',
                        'POST userinfo' => 'userinfo',
                        'POST pay' => 'pay',
                        'POST notify' => 'notify',
                        'POST config' => 'config',
                    ],
                ],
            ],
        ],
        'user' => [
            'identityClass' => 'api\models\WechatUser',
            'enableAutoLogin' => true,
            'enableSession' => false,
            'loginUrl' => null,
        ],
        'request' => [
            // !!! insert a secret key in the following (if it is empty) - this is required by cookie validation
            'cookieValidationKey' => 'ZMtQdfNPstwSBet6Kq11PxRnRHU8Qq6d',
        ],
        'response' => [
            'format' => \yii\web\Response::FORMAT_JSON, //make json as default format
        ],
    ],
    'params' => include __DIR__ . '/../../common/config/params.php',
];

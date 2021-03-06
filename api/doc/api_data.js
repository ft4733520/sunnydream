define({ "api": [
  {
    "type": "GET",
    "url": "/caiwu/order/get-order-detail",
    "title": "[GET] /caiwu/order/get-order-detail",
    "version": "1.0.0",
    "description": "<p>根据阿姨ID或order_code 获取订单详情</p>",
    "name": "actionGetOrderDetail",
    "group": "Caiwu",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "order_codes",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "worker_id",
            "description": "<p>阿姨ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "ret",
            "description": "<p>返回订单信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\nHTTP/1.1 200 OK\n{\n\"code\": 40000,\n\"msg\": \"success\",\n\"ret\": {\n   \"151119032387067909\": {\n      \"finance_order_code\": \"151119032387067909\",            订单编号\n      \"finance_order_service_type\": \"1\",                     服务类型\n      \"finance_order_service_type_name\": \"企业保洁\",         服务类型(返回中文显示)\n      \"finance_order_worker_id\": \"5347\",                     阿姨id\n      \"finance_order_service_at_begin\": \"0000-00-00 00:00:00\", 服务开始时间(时间戳)\n      \"finance_order_service_at_end\": \"0000-00-00 00:00:00\",   服务结束时间(时间戳)\n      \"finance_order_hour_count\": \"1.0\",                       总工时\n      \"finance_order_money_unit\": \"0.00\",                      工时单价\n      \"finance_order_status\": \"6\",                             订单状态(返回数据库存储数字标识)\n      \"finance_order_status_name\": \"已完成\",                    订单状态(返回中文显示)\n      \"finance_order_enterprise_contract_code\": \"BJ010000503\",  合同号\n      \"finance_order_enterprise_name\": \"北京精彩乐现科技有限公司\",  ---企业名称\n      \"finance_order_enterprise_address\": \"北京市昌平区上奥世纪中心写字楼a座1906\",  --企业服务地址\n      \"finance_order_enterprise_contact\": \"郭芳芳\",      企业联系人姓名\n      \"finance_order_enterprise_phone\": \"15210867662\",  企业联系人电话\n      \"finance_ordergroup_id\": \"50\"\n    }\n },\n\"alertMsg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/caiwu/OrderController.php",
    "groupTitle": "Caiwu"
  },
  {
    "type": "POST",
    "url": "/caiwu/order/get-order-detail-bycode",
    "title": "[POST] /caiwu/order/get-order-detail-bycode",
    "version": "1.0.0",
    "description": "<p>传入订单编号一维数组，返回订单详情二维数组列表</p>",
    "name": "actionGetOrderDetailBycode",
    "group": "Caiwu",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "order_codes",
            "description": "<p>订单编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array[]",
            "optional": false,
            "field": "ret",
            "description": "<p>订单信息.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"code\": 40000,\n\"msg\": \"success\",\n\"ret\": {\n     \"151126032393731299\": {\n         \"order_price\": \"0.00\",                       订单单价\n         \"order_code\": \"151126032393731299\",          订单编号\n         \"status\": \"6\",                               订单状态\n         \"service_type\": \"1\",                         服务类型\n         \"begin_time\": \"0000-00-00 00:00:00\",         服务开始时间\n         \"finish_time\": \"2015-11-27 00:12:01\",        服务结束时间\n         \"service_time\": \"1.0\",                       总工时\n         \"pay_amount\": \"0\",                           订单金额\n         \"worker_price\": \"0.00\",                      订单结算单价\n         \"worker_id\": \"5716\",                         阿姨ID\n         \"city_name\": \"北京\"                          订单所属城市名称\n         \"create_time\":\"0000-00-00 00:00:00\"          订单创建时间\n     }\n  },\n\"alertMsg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://dev.eboss/test/test-api?url=dev.ecapi/caiwu/order/get-order-detail-bycode"
      }
    ],
    "filename": "controllers/caiwu/OrderController.php",
    "groupTitle": "Caiwu"
  },
  {
    "type": "GET",
    "url": "/caiwu/order/get-order-detail-byfilter",
    "title": "[GET] /caiwu/order/get-order-detail-byfilter",
    "version": "1.0.0",
    "description": "<p>传入订单条件，返回订单详情二维数组列表</p>",
    "name": "actionGetOrderDetailByfilter",
    "group": "Caiwu",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>状态</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array[]",
            "optional": false,
            "field": "ret",
            "description": "<p>订单信息.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": 40000,\n    \"msg\": \"success\",\n    \"ret\": {\n    \"订单编号 order_code\": {\n    \"id\": \"1\",                                        --user_order表自增ID\n    \"create_time\": \"2015-11-23 13:22:46\",             --创建时间\n    \"status\": \"6\",                                    --订单状态：-1已取消，0初始化，2已指派，6已完成\n    \"is_service\": \"0\",                                --回访阿姨是否服务 1已服务 2未服务\n    \"is_service_remark\": \"\",                          --回访阿姨是否服务备注\n    \"user_id\": \"46\",                                  --用户id\n    \"reserve_type_id\": \"50\",                          --\n    \"address_id\": \"36\",                               -- 地址id\n    \"service_type\": \"1\",                              -- 服务类型\n    \"pop_channel\": \"BD下单\",                          -- 推广渠道\n    \"order_src\": \"BD推广\",                            -- 订单来源\n    \"reserve_time\": \"2015-11-19 15:00:00\",            -- 服务时间\n    \"service_list\": \"4,22,23,24,25,30\",               -- 服务列表\n    \"extend_admin_info\": \"\",                          -- 备注信息\n    \"extend_info\": \"\",                                -- 用户需求\n    \"address_type\": \"0\",                              --\n    \"sort_right\": \"0\",                                -- 排序权重\n    \"shop_id\": \"11\",                                  -- 门店号\n    \"active_code_id\": \"0\",                            -- 优惠码id\n    \"active_code\": \"\",                                --\n    \"charge_reward_id\": \"0\",                          -- 充值码id\n    \"worker_list\": \"\",                                -- 阿姨列表，用来缓存查的\n    \"worker_num\": \"1\",                                -- 需要几个人，数量\n    \"intent_card\": \"0\",                               -- 办卡高低意向\n    \"recommend_worker_id\": \"0\",                       --\n    \"is_used_worker\": \"0\",                            -- 是否要常用阿姨，0不要1要\n    \"free_order_time\": \"0\",                           -- 结算时免单时间\n    \"invisible\": \"0\",                                 -- 阿姨端是否可见 0：可见，1：不可见\n    \"pay_way\": \"\",                                    -- 支付途径\n    \"pay_account\": \"\",                                -- 支付账户\n    \"pay_amount\": \"0\",                                -- 支付金额\n    \"is_paid\": \"0\",                                   --  0 未支付，1已支付\n    \"finish_time\": \"0000-00-00 00:00:00\",             -- 结束时间\n    \"sms_type\": \"1,2,3,4\",                            --  短信下发类型\n    \"is_response\": \"0\",                               -- 是否有深度保洁 1 有0 没有\n    \"begin_time\": \"0000-00-00 00:00:00\",              -- 开始服务的时间\n    \"city_code\": \"131\",                               -- 城市代码\n    \"is_hidden\": \"0\",                                 --  是否隐藏\n    \"lat\": \"0\",                                       -- 订单坐标\n    \"lng\": \"0\",                                       -- 订单坐标\n    \"second_phone\": \"0\",                              -- 次要电话\n    \"pop_community_id\": \"0\",                          -- 推广小区\n    \"street\": \"0\",                                    -- 街道\n    \"place_detail\": \"\",                               -- 具体地址\n    \"worker_wage_id\": \"0\",                            -- 支付工人的 id\n    \"department\": \"\",                                 -- 部门\n    \"qd_time\": \"2015\",                                -- 签订时间\n    \"qy_manager\": \"张春明\",                           -- 区域经理\n    \"zg_name\": \"刘永超\",                              --主管姓名\n    \"bd_phone\": \"2147483647\",                         -- BD电话\n    \"bd_name\": \"王垚\",                                -- BD姓名\n    \"order_price\": \"0.00\",                            --\n    \"worker_price\": \"0.00\",\n    \"shop_price\": \"0.00\",\n    \"service_time\": \"1.0\",                            --订单时长\n    \"order_code\": \"151119032387067909\",               --订单编码\n    \"is_supplemented\": \"0\",                           -- 是否补单 0不是 1后台补单 2阿姨端补单\n    \"parent_id\": \"0\"                                  -- 补单的父级订单\n    \"bill_id\":\"0\"                                     -- 账单ID\n    \"customer_status\":\"0\"                             -- 客户确认状态\n    \"worker_status\":\"0\"                               -- 阿姨确认状态\n    \"operate_status\":\"0\"                              -- 运营确认状态\n    },\n    \"alertMsg\": \"成功\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/caiwu/OrderController.php",
    "groupTitle": "Caiwu"
  },
  {
    "type": "GET",
    "url": "/caiwu/order/up-order-status",
    "title": "[GET] /caiwu/order/up-order-status",
    "version": "1.0.0",
    "description": "<p>BOSS后台确认后，修改子订单状态</p>",
    "name": "actionGetOrderDetailByfilter",
    "group": "Caiwu",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "bill_id",
            "description": "<p>账单D</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "customer_status",
            "description": "<p>客户确认状态</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "worker_status",
            "description": "<p>阿姨确认状态</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "operate_status",
            "description": "<p>运营确认状态</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "ret",
            "description": "<p>修改状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\nHTTP/1.1 200 OK\n{\n    \"code\": 40000,\n    \"msg\": \"success\",\n    \"ret\": 1,\n    \"alertMsg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/caiwu/OrderController.php",
    "groupTitle": "Caiwu"
  },
  {
    "type": "get",
    "url": "caiwu/payment/get-payment-view",
    "title": "[get] caiwu/payment/get-payment-view  传入支付记录id 返回记录详情",
    "version": "1.0.0",
    "group": "Caiwu",
    "description": "<p>传入支付记录id 返回记录详情</p>",
    "name": "actionGetPaymentView",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>支付记录id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret.orders.id",
            "description": "<p>交易记录id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret.user_id",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret.ordergroup_id",
            "description": "<p>合同ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret.order_id",
            "description": "<p>订单id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret.service_type",
            "description": "<p>服务类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ret.payment_source",
            "description": "<p>来源页面</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret.payment_channel",
            "description": "<p>支付渠道</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret.payment_mode",
            "description": "<p>交易方式</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret.payment_money",
            "description": "<p>交易金额</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret.payment_status",
            "description": "<p>支付状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ret.payment_order_id",
            "description": "<p>支付订单号</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret.payment_transaction_id",
            "description": "<p>第三方交易流水号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ret.payment_customer_account",
            "description": "<p>对方账户</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret.payment_ejiajie_account",
            "description": "<p>e家洁京东支付财务账户</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ret.payment_memo",
            "description": "<p>备注</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret.admin_id",
            "description": "<p>管理员ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret.cash_back",
            "description": "<p>返现金额</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret.created_at",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>成功代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>成功信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "alertMsg",
            "description": "<p>成功弹出信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "ret",
            "description": "<p>成功的数组</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\t\"code\": 40000,\n  \t\"msg\": \"success\",\n  \t\"ret\": {\n   \t  \t\t\"id\": \"支付记录id\",\n      \t\t\"user_id\": \"用户ID\",\n\t\t\t\t\"ordergroup_id\": \"合同ID\",\n\t\t\t\t\"order_id\": \"订单id\",\n\t\t\t\t\"service_type\": \"服务类型:0=账户操作,1=保洁服务,2=桶装水\",\n\t\t\t\t\"payment_source\": \"来源页面\",\n\t\t\t\t\"payment_channel\": \"支付渠道\",\n\t\t\t\t\"payment_mode\": \"交易方式:1=消费,2=充值,3=充值返现,4=退款,5=补偿，6=退押金\",\n\t\t\t\t\"payment_money\": \"交易金额\",\n\t\t\t\t\"payment_status\": \"支付状态\",\n\t\t\t\t\"payment_order_id\": \"支付订单号\",\n\t\t\t\t\"payment_transaction_id\": \"第三方交易流水号\",\n\t\t\t\t\"payment_customer_account\": \"对方账户\",\n\t\t\t\t\"payment_ejiajie_account\": \"e家洁京东支付财务账户\",\n\t\t\t\t\"payment_memo\": \"备注\",\n\t\t\t\t\"admin_id\": \"管理员ID\",\n\t\t\t\t\"cash_back\": \"返现金额\",\n\t\t\t\t\"created_at\": \"创建时间\"\n \t}\n\t\t\"alertMsg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://dev.eboss/test/test-api?url=dev.ecapi/caiwu/payment/get-payment-view"
      }
    ],
    "filename": "controllers/caiwu/PaymentController.php",
    "groupTitle": "Caiwu"
  },
  {
    "type": "GET",
    "url": "caiwu/customer/get-shop-detail",
    "title": "[GET] caiwu/customer/get-shop-detail",
    "version": "1.0.0",
    "description": "<p>传入公司id ，返回公司所在的片区id和片区name</p>",
    "name": "actionGetShopDetail",
    "group": "Caiwu",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ordergroup_id",
            "description": "<p>公司ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array[]",
            "optional": false,
            "field": "ret",
            "description": "<p>订单信息.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": 40000,\n    \"msg\": \"success\",\n    \"ret\": {\n    \"shop_name\": \"海淀区\",\n    \"shop_id\": \"20\"\n    },\n    \"alertMsg\": \"成功\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/caiwu/CustomerController.php",
    "groupTitle": "Caiwu"
  },
  {
    "type": "POST",
    "url": "/caiwu/pay/pay-auto-receive",
    "title": "[POST] /pay-auto-receive 传入支付成功后的必要参数  返回处理结果",
    "version": "1.0.0",
    "group": "Caiwu",
    "name": "actionJdAuto",
    "description": "<p>传入支付成功后的必要参数  返回处理结果</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "v_oid",
            "description": "<p>支付订单号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pay_type",
            "description": "<p>交易类型 1，支付 2，充值</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pay_channel",
            "description": "<p>支付方式 1，支付宝 2，京东支付</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ext",
            "description": "<p>充值成功后处理需要的参数</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\t\"code\": 40000,\n  \t\"msg\": \"success\",\n  \t\"ret\": [],\n\t\t\"alertMsg\": \"成功\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\t\"code\": 40001,\n  \t\"msg\": \"error\",\n  \t\"ret\": [],\n\t\t\"alertMsg\": \"不是post传参\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://dev.eboss/test/test-api?url=dev.ecapi/caiwu/pay/pay-auto-receive"
      }
    ],
    "filename": "controllers/caiwu/PayController.php",
    "groupTitle": "Caiwu"
  },
  {
    "type": "POST",
    "url": "/tongyi/tong-yi/append-order",
    "title": "[POST] /append-order 创建补单",
    "version": "1.0.0",
    "group": "Tongyi",
    "description": "<p>创建补单</p>",
    "name": "actionAppendOrder",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "workerId",
            "description": "<p>阿姨id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderCode",
            "description": "<p>订单编号.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderChannelName",
            "description": "<p>订单渠道名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderAppendBookedCount",
            "description": "<p>补单时长(时间戳)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret.id",
            "description": "<p>补单id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ret.order_append_code",
            "description": "<p>补单编号</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>成功代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>成功信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "alertMsg",
            "description": "<p>成功弹出信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "ret",
            "description": "<p>成功的数组</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"code\": 40000,\n \"msg\": \"创建补单成功\",\n \"ret\": {\n   \"id\":\"补单id\",\n   \"order_append_code\":\"补单编号\"\n  }\n \"alertMsg\": \"创建补单成功\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 OK\n{\n \"code\": 40011,\n \"msg\": \"该订单或该订单的补单已经报单\",\n \"ret\": ''\n \"alertMsg\": \"该订单或该订单的补单已经报单\"\n }",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>失败代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>失败信息</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "ret",
            "description": "<p>失败的数组</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "alertMsg",
            "description": "<p>失败弹出信息</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://dev.eboss/test/test-api?url=dev.ecapi/tongyi/tong-yi/append-order"
      }
    ],
    "filename": "controllers/tongyi/TongYiController.php",
    "groupTitle": "Tongyi"
  },
  {
    "type": "POST",
    "url": "/tongyi/tong-yi/done-orders",
    "title": "[POST] /done-orders 获取阿姨历史订单(预约服务结束时间从近到远排序)",
    "version": "1.0.0",
    "group": "Tongyi",
    "description": "<p>获取阿姨历史订单(预约服务结束时间从近到远排序)</p>",
    "name": "actionDoneOrders",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "workerId",
            "description": "<p>阿姨id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderBookedEndTime",
            "description": "<p>服务结束时间(时间戳)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageNum",
            "description": "<p>订单数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "ret.orders",
            "description": "<p>订单数组</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret.orders.id",
            "description": "<p>订单id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ret.orders.order_code",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ret.orders.order_booked_time",
            "description": "<p>服务时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ret.orders.order_booked_end_time",
            "description": "<p>服务结束时间（unix时间戳，用于刷新下一页）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ret.orders.order_address",
            "description": "<p>订单地址</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret.orders.order_status_customer",
            "description": "<p>订单当前状态</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>成功代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>成功信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "alertMsg",
            "description": "<p>成功弹出信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "ret",
            "description": "<p>成功的数组</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\": 40000,\n     \"msg\": \"操作成功\",\n     \"ret\": {\n         \"orders\": [\n            {\n                 \"id\": \"订单id\",\n   　　　　　　　　\"order_code\": \"订单编号\",\n   　　　　　　　　\"order_booked_time\": \"服务时间（如：　4月10日 14:00-16:00）\",\n   　　　　　　　　\"order_booked_end_time\": \"服务结束时间（unix时间戳，用于刷新下一页）\",\n                 \"order_address\": \"北京,北京市,朝阳区,SOHO一期2单元908\",\n                 \"order_status_customer\":\"订单当前状态\",　　　　　//待评价，已评价，有投诉，结算中，已结算\n            }\n         ]\n     }\n     \"alertMsg\": \"操作成功\"\n }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://dev.eboss/test/test-api?url=dev.ecapi/tongyi/tong-yi/done-orders"
      }
    ],
    "filename": "controllers/tongyi/TongYiController.php",
    "groupTitle": "Tongyi"
  },
  {
    "type": "POST",
    "url": "/tongyi/tong-yi/get-notsettled-order",
    "title": "[POST] /get-notsettled-order 返回已完成未结算的订单",
    "version": "1.0.0",
    "group": "Tongyi",
    "description": "<p>返回已完成未结算的订单</p>",
    "name": "actionGetNotsettledOrder",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "workerId",
            "description": "<p>阿姨id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderCode",
            "description": "<p>订单编号.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_time",
            "description": "<p>创建订单开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_time",
            "description": "<p>创建订单结束时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "page",
            "description": "<p>请求页数</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "pagenum",
            "description": "<p>每页条数</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "is_count",
            "description": "<p>1：显示总数，0：显示列表</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "ret.order",
            "description": "<p>订单列表数组</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret.countPrice",
            "description": "<p>价格总数</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>成功代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>成功信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "alertMsg",
            "description": "<p>成功弹出信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "ret",
            "description": "<p>成功的数组</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\": 40000,\n     \"msg\": \"操作成功\",\n     \"ret\": {\n         \"orders\": [\n              \"开始时间时间搓\": [\n                      \"id\": \"订单ID\",\n                      \"worker_price\": \"价格\",\n                      \"order_code\": \"订单编号\",\n                      \"status\": \"订单状态\",\n                      \"create_time\": \"创建时间\",\n                      \"service_type\": \"服务类型\",\n                      \"begin_time\": \"开始时间\",\n                      \"order_address\": \"服务地址\",\n                      \"finish_time\": 服务时长,\n                      \"order_type\": \"订单类型\"\n             ]\n         ]\n     }\n     \"alertMsg\": \"操作成功\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 OK\n{\n \"code\": 40011,\n \"msg\": \"error\",\n \"ret\": ''\n \"alertMsg\": \"error\"\n }",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>失败代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>失败信息</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "ret",
            "description": "<p>失败的数组</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "alertMsg",
            "description": "<p>失败弹出信息</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://dev.eboss/test/test-api?url=dev.ecapi/tongyi/tong-yi/get-notsettled-order"
      }
    ],
    "filename": "controllers/tongyi/TongYiController.php",
    "groupTitle": "Tongyi"
  },
  {
    "type": "POST",
    "url": "/tongyi/tong-yi/order-detail",
    "title": "[POST] /order-detail 获取合同订单详情",
    "version": "1.0.0",
    "group": "Tongyi",
    "description": "<p>获取合同订单详情</p>",
    "name": "actionOrderDetail",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderCode",
            "description": "<p>订单编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret.ordergroup_id",
            "description": "<p>订单id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ret.order_code",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ret.ordergroup_status",
            "description": "<p>待服务订单</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ret.service_time",
            "description": "<p>服务时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ret.service_time_length",
            "description": "<p>服务时长</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ret.service_time_end",
            "description": "<p>服务结束时间戳</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ret.user_address",
            "description": "<p>服务地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ret.user_telephone",
            "description": "<p>用户电话</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ret.service_type",
            "description": "<p>服务类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ret.ordergroup_price",
            "description": "<p>订单金额</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ret.cash_money",
            "description": "<p>现金</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ret.order_lat",
            "description": "<p>经度</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ret.order_lng",
            "description": "<p>纬度</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ret.customer_memo",
            "description": "<p>客户备注</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ret.update_booked_time_available",
            "description": "<p>是否可以更换阿姨</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ret.append_available",
            "description": "<p>是否可以补单</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ret.order_pickup_address",
            "description": "<p>取件地址</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "ret.service_task",
            "description": "<p>服务</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ret.service_task.task_name",
            "description": "<p>服务区域名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ret.service_task.task_icon",
            "description": "<p>区域图片</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "ret.service_task.is_link",
            "description": "<p>是否为链接</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ret.service_task.child_task",
            "description": "<p>服务内容</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "ret.order_appended_info",
            "description": "<p>补单信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ret.order_appended_info.order_append_code",
            "description": "<p>补单编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ret.order_appended_info.order_append_money",
            "description": "<p>补单金额</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ret.order_appended_info.order_append_booked_count",
            "description": "<p>补单时长</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ret.order_appended_info.order_append_created_at",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ret.order_appended_info.order_append_channel_name",
            "description": "<p>下单渠道</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ret.order_appended_info.order_append_pay_channel",
            "description": "<p>补单支付渠道</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ret.order_appended_info.order_append_pay_money",
            "description": "<p>第三方支付金额</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ret.order_appended_info.order_append_use_acc_balance",
            "description": "<p>余额支付金额</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ret.order_appended_info.order_append_status_name",
            "description": "<p>补单状态</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>成功代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>成功信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "alertMsg",
            "description": "<p>成功弹出信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "ret",
            "description": "<p>成功的数组</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n   \"code\": 40000,\n   \"msg\": \"操作成功\",\n   \"ret\": [\n   {\n       \"ordergroup_id\": 21,\n       \"order_code\": \"编号\"\n       \"ordergroup_status\": \"待服务订单\",\n       \"service_time\": \"5月11日 14:00 - 16:00\",\n       \"service_time_length\": \"2.0\",\n       \"service_time_end\": 结束时间戳,\n       \"user_address\": \"北京市朝阳区光华路soho2期\",\n       \"user_telephone\": \"13432112341\",\n       \"service_type\": \"企业保洁\",\n       \"ordergroup_price\": \"50.00元\",\n       \"cash_money\": \"0\",//现金金额 ++\n       \"order_lat\": 经度,\n       \"order_lng\": 纬度,\n       \"customer_memo\": 客户备注 extend_info\n       \"update_booked_time_available\": 是否可以修改时间\n       \"update_worker_available\": 是否可以更换阿姨\n       \"append_available\": 是否可以补单\n       \"order_pickup_address\": 取件地址\n       \"service_task\": [\n       {\n           \"task_name\": \"公共区\",\n           \"task_icon\": \"http://www.baidu.com/1.jpg\",\n           \"is_link\": true,\n           \"child_task\": [\n               \"整理擦拭办公桌椅\",\n               \"倒垃圾，换垃圾袋子\",\n               \"地面清洁\"\n           ]\n       }\n       ],\n       \"order_appended_info\":[\n       {\n           \"order_append_code\": \"补单编号\",\n           \"order_append_money\": \"补单金额\",\n           \"order_append_booked_count\": \"补单时长\",\n           \"order_append_created_at\": \"创建时间\",\n           \"order_append_channel_name\":\"下单渠道\",\n           \"order_append_pay_channel\":\"补单支付渠道\",\n           \"order_append_pay_money\":\"第三方支付金额\",         //对应后台返回字段order_pay_money\n           \"order_append_use_acc_balance\":\"余额支付金额\",     //对应后台返回字段order_use_acc_balance\n           \"order_append_status_name\":\"补单状态\"\n       }\n       ]\n   }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://dev.eboss/test/test-api?url=dev.ecapi/tongyi/tong-yi/order-detail"
      }
    ],
    "filename": "controllers/tongyi/TongYiController.php",
    "groupTitle": "Tongyi"
  },
  {
    "type": "POST",
    "url": "/tongyi/tong-yi/send-order",
    "title": "[POST] /send-order 报单",
    "version": "1.0.0",
    "group": "Tongyi",
    "description": "<p>报单</p>",
    "name": "actionSendOrder",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "workerId",
            "description": "<p>阿姨id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderId",
            "description": "<p>订单id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lng",
            "description": "<p>经度</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lat",
            "description": "<p>纬度</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device_no",
            "description": "<p>设备号\tstring</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 40000,\n  \"msg\": \"报单成功\",\n  \"alertMsg\": \"报单成功\"\n  \"ret\":{}\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>成功代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>成功信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "alertMsg",
            "description": "<p>成功弹出信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "ret",
            "description": "<p>成功的数组</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 40006,\n   \"msg\": \"报单失败\",\n   \"ret\": {},\n   \"alertMsg\": \"报单失败\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>失败代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>失败信息</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "ret",
            "description": "<p>失败的数组</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "alertMsg",
            "description": "<p>失败弹出信息</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://dev.eboss/test/test-api?url=dev.ecapi/tongyi/tong-yi/send-order"
      }
    ],
    "filename": "controllers/tongyi/TongYiController.php",
    "groupTitle": "Tongyi"
  },
  {
    "type": "POST",
    "url": "/tongyi/tong-yi/tobao-orders",
    "title": "[POST] /tobao-orders 查看未报单的订单(获取还没有完成并且未报单的订单)",
    "version": "1.0.0",
    "group": "Tongyi",
    "description": "<p>查看未报单的订单(获取还没有完成并且未报单的订单)</p>",
    "name": "actionTobaoOrders",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "workerId",
            "description": "<p>阿姨id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n     \"code\": \"40000\",\n     \"msg\": \"操作成功\",\n     \"ret\": {\n         \"serving_orders\": [\n             {\n                 \"id\": \"订单id\",\n   　　　　　　　　\"order_code\": \"订单编号\",\n                \"order_service_type\": \"企业保洁\"\n             }\n         ]\n     }\n    \"alertMsg\": \"操作成功\"\n }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>成功代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>成功信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "alertMsg",
            "description": "<p>成功弹出信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "ret",
            "description": "<p>成功的数组</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 OK\n{\n \"code\": 40022,\n \"msg\": \"没有未报单的订单\",\n \"ret\": ''\n \"alertMsg\": \"没有未报单的订单\"\n }",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>失败代码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>失败信息</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "ret",
            "description": "<p>失败的数组</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "alertMsg",
            "description": "<p>失败弹出信息</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://dev.eboss/test/test-api?url=dev.ecapi/tongyi/tong-yi/tobao-orders"
      }
    ],
    "filename": "controllers/tongyi/TongYiController.php",
    "groupTitle": "Tongyi"
  },
  {
    "type": "POST",
    "url": "/tongyi/tong-yi/todo-orders",
    "title": "[POST] /todo-orders 待服务订单列表",
    "version": "1.0.0",
    "group": "Tongyi",
    "description": "<p>待服务订单列表</p>",
    "name": "actionTodoOrders",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "workerId",
            "description": "<p>阿姨id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageNum",
            "description": "<p>每页包含订单数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderBookedBeginTime",
            "description": "<p>时间 年月日时分秒</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "ret.orders",
            "description": "<p>订单数组</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret.orders.id",
            "description": "<p>订单id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ret.orders.order_code",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ret.orders.order_booked_time",
            "description": "<p>服务时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ret.orders.order_booked_begin_time",
            "description": "<p>服务开始时间（unix时间戳，用于刷新下一页）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ret.orders.order_booked_end_time",
            "description": "<p>服务结束时间（unix时间戳，用于刷新下一页）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ret.orders.order_address",
            "description": "<p>订单地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ret.orders.order_service_item_name",
            "description": "<p>家庭保洁</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ret.orders.order_money",
            "description": "<p>订单金额</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ret.orders.cash_money",
            "description": "<p>现金金额</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ret.orders.order_lat",
            "description": "<p>纬度</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ret.orders.order_lng",
            "description": "<p>经度</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ret.orders.order_customer_phone",
            "description": "<p>客户手机号</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>成功代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>成功信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "alertMsg",
            "description": "<p>成功弹出信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "ret",
            "description": "<p>成功的数组</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n    \"code\": 40000,\n    \"msg\": \"操作成功\",\n    \"ret\": {\n        \"orders\": [\n            {\n                \"id\": \"订单id\",\n  　　　　　　　　\"order_code\": \"订单编号\",\n  　　　　　　　　\"order_booked_time\": \"服务时间（如：　4月10日 14:00-16:00）\",\n  　　　　　　　　\"order_booked_begin_time\": \"服务开始时间（unix时间戳，用于刷新下一页）\",\n  　　　　　　　　\"order_booked_end_time\": \"服务结束时间\",\n                \"order_address\": \"北京,北京市,朝阳区,SOHO一期2单元908\",\n                \"order_service_item_name\": \"家庭保洁\",\n                \"order_money\": \"订单金额\",\n                \"cash_money\": \"现金金额\",\n                \"order_lat\": \"纬度\",\n                \"order_lng\": \"经度\",\n                \"order_customer_phone\":\"客户手机号\"\n            },\n            {\n                \"id\": \"订单id\",\n  　　　　　　　　\"order_code\": \"订单编号\",\n  　　　　　　　　\"order_booked_time\": \"服务时间（如：　4月10日 14:00-16:00）\",\n  　　　　　　　　\"order_booked_begin_time\": \"服务开始时间（unix时间戳，用于刷新下一页）\",\n                \"order_booked_end_time\": \"服务结束时间\",\n                \"order_address\": \"北京,北京市,朝阳区,SOHO一期2单元908\",\n                \"order_service_item_name\": \"企业保洁\",　　　　　　　　　　　　　\n                \"order_money\": \"订单金额（给阿姨结算的钱）\",\n                \"cash_money\": \"现金金额\",\n                \"order_lat\": \"纬度\",\n                \"order_lng\": \"经度\",\n                \"order_customer_phone\":\"客户手机号\"\n            },\n        ]\n    },\n    \"alertMsg\": \"操作成功\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://dev.eboss/test/test-api?url=dev.ecapi/tongyi/tong-yi/todo-orders"
      }
    ],
    "filename": "controllers/tongyi/TongYiController.php",
    "groupTitle": "Tongyi"
  },
  {
    "type": "get",
    "url": "caiwu/payment/payment-list",
    "title": "[get] caiwu/payment/payment-list 传入分页，过滤条件  返回符合条件的交易记录",
    "version": "1.0.0",
    "group": "caiwu",
    "description": "<p>传入分页，过滤条件  返回符合条件的交易记录</p>",
    "name": "actionGetPaymentView",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "per_page",
            "description": "<p>每页显示多少条</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>当前页码数</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "filter",
            "description": "<p>支付记录过滤参数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret.orders.id",
            "description": "<p>交易记录id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret.user_id",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret.ordergroup_id",
            "description": "<p>合同ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret.order_id",
            "description": "<p>订单id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret.service_type",
            "description": "<p>服务类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ret.payment_source",
            "description": "<p>来源页面</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret.payment_channel",
            "description": "<p>支付渠道</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret.payment_mode",
            "description": "<p>交易方式</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret.payment_money",
            "description": "<p>交易金额</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret.payment_status",
            "description": "<p>支付状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ret.payment_order_id",
            "description": "<p>支付订单号</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret.payment_transaction_id",
            "description": "<p>第三方交易流水号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ret.payment_customer_account",
            "description": "<p>对方账户</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret.payment_ejiajie_account",
            "description": "<p>e家洁京东支付财务账户</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ret.payment_memo",
            "description": "<p>备注</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret.admin_id",
            "description": "<p>管理员ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret.cash_back",
            "description": "<p>返现金额</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret.created_at",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>成功代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>成功信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "alertMsg",
            "description": "<p>成功弹出信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "ret",
            "description": "<p>成功的数组</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\t\"code\": 40000,\n  \t\"msg\": \"success\",\n  \t\"ret\": {\n   \t  \t[\n\t\t\t\t\"id\": \"1234\",\n      \t\t\"user_id\": \"用户ID\",\n\t\t\t\t\"ordergroup_id\": \"合同ID\",\n\t\t\t\t\"order_id\": \"订单id\",\n\t\t\t\t\"service_type\": \"服务类型:0=账户操作,1=保洁服务,2=桶装水\",\n\t\t\t\t\"payment_source\": \"来源页面\",\n\t\t\t\t\"payment_channel\": \"支付渠道\",\n\t\t\t\t\"payment_mode\": \"交易方式:1=消费,2=充值,3=充值返现,4=退款,5=补偿，6=退押金\",\n\t\t\t\t\"payment_money\": \"交易金额\",\n\t\t\t\t\"payment_status\": \"支付状态\",\n\t\t\t\t\"payment_order_id\": \"支付订单号\",\n\t\t\t\t\"payment_transaction_id\": \"第三方交易流水号\",\n\t\t\t\t\"payment_customer_account\": \"对方账户\",\n\t\t\t\t\"payment_ejiajie_account\": \"e家洁京东支付财务账户\",\n\t\t\t\t\"payment_memo\": \"备注\",\n\t\t\t\t\"admin_id\": \"管理员ID\",\n\t\t\t\t\"cash_back\": \"返现金额\",\n\t\t\t\t\"created_at\": \"创建时间\"\n\t\t\t],\n       \t...\n \t},\n\t\t\"alertMsg\": \"成功\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://dev.eboss/test/test-api?url=dev.ecapi/caiwu/payment/payment-list"
      }
    ],
    "filename": "controllers/caiwu/PaymentController.php",
    "groupTitle": "caiwu"
  }
] });

<?php
// +----------------------------------------------------------------------
// | When work is a pleasure, life is a joy!
// +----------------------------------------------------------------------
// | User: ShouKun Liu  |  Email:24147287@qq.com  | Time:2016/12/13 22:25
// +----------------------------------------------------------------------
// | TITLE: 新增权限
// +----------------------------------------------------------------------
use yii\helpers\Url;
use yii\widgets\ActiveForm;
use backend\models\AdminRule;

//获取菜单列表
$dataList = AdminRule::getAllMenu();
$typeList = $model->attributeValues()
?>

<?php $this->beginBlock('head'); ?>
<link rel="stylesheet" href="<?= Url::base() ?>/aceAdmin/assets/css/jquery-ui.custom.css"/>
<link rel="stylesheet" href="<?= Url::base() ?>/aceAdmin/assets/css/chosen.css"/>
<link rel="stylesheet" href="<?= Url::base() ?>/aceAdmin/assets/css/datepicker.css"/>
<link rel="stylesheet" href="<?= Url::base() ?>/aceAdmin/assets/css/bootstrap-timepicker.css"/>
<link rel="stylesheet" href="<?= Url::base() ?>/aceAdmin/assets/css/daterangepicker.css"/>
<link rel="stylesheet" href="<?= Url::base() ?>/aceAdmin/assets/css/bootstrap-datetimepicker.css"/>
<link rel="stylesheet" href="<?= Url::base() ?>/aceAdmin/assets/css/colorpicker.css"/>

<!-- text fonts -->
<link rel="stylesheet" href="<?= Url::base() ?>/aceAdmin/assets/css/ace-fonts.css"/>
<!-- ace styles -->
<link rel="stylesheet" href="<?= Url::base() ?>/aceAdmin/assets/css/ace.css" class="ace-main-stylesheet"
      id="main-ace-style"/>
<!--[if lte IE 9]>
<link rel="stylesheet" href="<?=Url::base()?>/aceAdmin/assets/css/ace-part2.css" class="ace-main-stylesheet"/>
<![endif]-->

<?php $this->endBlock(); ?>
<!--===========================================-->
<!--html-->
<div class="main-container" id="main-container">
    <!-- /section:basics/sidebar -->
    <div class="main-content">
        <div class="main-content-inner">
            <div class="page-content">
                <div class="page-header">
                    <h1>
                        权限管理
                        <small>
                            <i class="ace-icon fa fa-angle-double-right"></i>
                            添加权限
                        </small>
                    </h1>
                </div><!-- /.page-header -->

                <div class="row">
                    <a href="<?=  Url::toRoute('index')?>" class="btn btn-primary">
                        <i class="icon-only ace-icon fa fa-align-left"></i>
                        列表
                    </a>
                </div>
                <div class="hr hr-18 dotted hr-double"></div>

                <div class="row">
                    <div class="col-xs-12">
                        <!-- PAGE CONTENT BEGINS -->
                        <?php $form = ActiveForm::begin(
                            ['id' => 'admin-rule-form',
                                'action' => Url::toRoute('create'),
                                'enableAjaxValidation' => true,
                            ]) ?>
                        <!-- #section:elements.form -->
                        <div class="row form-horizontal">

                            <div class="col-xs-10 col-lg-offset-1">
                                <div class="widget-box">
                                    <div class="widget-header">
                                        <h4 class="widget-title">添加权限</h4>
                                    </div>

                                    <div class="widget-body">
                                        <div class="widget-main">
                                            <?= $form->field($model, 'pid')
                                                ->dropDownList($dataList, ['class' => 'col-md-offset-1  col-sm-3'])
                                                ->label('上级菜单:', ['class' => 'col-sm-3 control-label no-padding-right']) ?>
                                            <?= $form->field($model, 'title')
                                                ->textInput(['class' => 'col-md-offset-1  col-sm-3', 'placeholder' => '权限列表'])
                                                ->label('名称:', ['class' => 'col-sm-3 control-label no-padding-right']) ?>
                                            <?= $form->field($model, 'route')
                                                ->textInput(['class' => 'col-md-offset-1  col-sm-3', 'placeholder' => 'admin-rule/index'])
                                                ->label('路由:', ['class' => 'col-sm-3 control-label no-padding-right']) ?>
                                            <?= $form->field($model, 'icon')
                                                ->textInput(['class' => 'col-md-offset-1  col-sm-3', 'placeholder' => 'icon'])
                                                ->label('图标:', ['class' => 'col-sm-3 control-label no-padding-right']) ?>
                                            <?= $form->field($model, 'condition')
                                                ->textInput(['class' => 'col-md-offset-1  col-sm-3', 'placeholder' => '描述'])
                                                ->label('描述:', ['class' => 'col-sm-3 control-label no-padding-right']) ?>
                                            <?= $form->field($model, 'order')
                                                ->textInput(['class' => 'col-md-offset-1  col-sm-3', 'value' => '1', 'placeholder' => '1'])
                                                ->label('排序:', ['class' => 'col-sm-3 control-label no-padding-right']) ?>
                                            <?= $form->field($model, 'tips')
                                                ->textInput(['class' => 'col-md-offset-1  col-sm-3', 'value' => '1', 'placeholder' => '提示'])
                                                ->label('提示:', ['class' => 'col-sm-3 control-label no-padding-right']) ?>
                                            <?= $form->field($model, 'type')
                                                ->dropDownList($typeList['type'], ['class' => 'col-md-offset-1  col-sm-3', 'placeholder' => '路由列表', 'readonly' => 'true'])
                                                ->label('类型:', ['class' => 'col-sm-3 control-label no-padding-right']) ?>
                                            <div class="form-group field-form-field-1 required">
                                                <label class="col-sm-3 control-label no-padding-right"
                                                       for="form-field-1">是否显示:</label>
                                                <label class="col-md-offset-1  col-sm-3">
                                                    <input name="AdminRule[is_show]" checked value="1"
                                                           class="ace ace-switch ace-switch-7 " type="checkbox">
                                                    <span class="lbl"></span>
                                                </label>
                                            </div>

                                            <div class="form-group field-form-field-1 required">
                                                <label class="col-sm-3 control-label no-padding-right"
                                                       for="form-field-1">状态:</label>
                                                <label class="col-md-offset-1  col-sm-3">
                                                    <input name="AdminRule[status]" checked value="1"
                                                           class="ace ace-switch ace-switch-7 " type="checkbox">
                                                    <span class="lbl"></span>
                                                </label>
                                            </div>


                                            <div class="clearfix ">
                                                <div class="col-md-offset-3 col-md-9">
                                                    <button class="btn btn-info ajaxForm" type="button">
                                                        <i class="ace-icon fa fa-check bigger-110"></i>
                                                        提交
                                                    </button>
                                                    &nbsp;
                                                    <button class="btn" type="reset">
                                                        <i class="ace-icon fa fa-undo bigger-110"></i>
                                                        重置
                                                    </button>
                                                </div>
                                            </div>

                                            <div class="hr hr-24"></div>
                                        </div>
                                    </div>
                                </div>
                            </div><!-- /.span -->
                        </div><!-- /.row -->
                        <?php ActiveForm::end(); ?>

                    </div><!-- /.col -->
                </div><!-- /.row -->
            </div><!-- /.page-content -->
        </div>
    </div><!-- /.main-content -->


</div><!-- /.main-container -->
<!--html-->
<!--===========================================-->
<?php $this->beginBlock('footer'); ?>

<?php $this->endBlock(); ?>

<script>
    $('.ajaxForm').bind('click', function () {
        var data = $('#admin-rule-form').serialize();
        $.ajax({
            url: $('#admin-rule-form').attr('action'),
            type: 'post',
            dataType: 'json',
            data: data,
            success: function (data) {
                layer.msg(data.message,'',function () {
                    if (data.code == 200 ){
                        window.location=location.href;
                    }
                });
            }
        })

    });

</script>



<template>
    <div>
        <p class="tt-item">Button 按钮</p>
        <p>常用的操作按钮。。</p>
        <p class="tt-item">基础用法</p>
        <p>基础的按钮用法。</p>
        <div class="demo-block demo-box demo-zh-CN demo-button">
            <el-row>
                <el-button>默认按钮</el-button>
                <el-button type="primary">主要按钮</el-button>
                <el-button type="success">成功按钮</el-button>
                <el-button type="info">信息按钮</el-button>
                <el-button type="warning">警告按钮</el-button>
                <el-button type="danger">危险按钮</el-button>
            </el-row>

            <el-row>
                <el-button plain>朴素按钮</el-button>
                <el-button type="primary" plain>主要按钮</el-button>
                <el-button type="success" plain>成功按钮</el-button>
                <el-button type="info" plain>信息按钮</el-button>
                <el-button type="warning" plain>警告按钮</el-button>
                <el-button type="danger" plain>危险按钮</el-button>
            </el-row>

            <el-row>
                <el-button round>圆角按钮</el-button>
                <el-button type="primary" round>主要按钮</el-button>
                <el-button type="success" round>成功按钮</el-button>
                <el-button type="info" round>信息按钮</el-button>
                <el-button type="warning" round>警告按钮</el-button>
                <el-button type="danger" round>危险按钮</el-button>
            </el-row>

            <el-row>
                <el-button icon="el-icon-search" circle></el-button>
                <el-button type="primary" icon="el-icon-edit" circle></el-button>
                <el-button type="success" icon="el-icon-check" circle></el-button>
                <el-button type="info" icon="el-icon-message" circle></el-button>
                <el-button type="warning" icon="el-icon-star-off" circle></el-button>
                <el-button type="danger" icon="el-icon-delete" circle></el-button>
            </el-row>
            <el-collapse style="">
                <el-collapse-item style="text-align: center;color:#409EFF;" title="    查看/隐藏 代码" name="1">
                    <div style="text-align: left">
                        <pre><code class="html">{{str1}}</code></pre>
                    </div>
                </el-collapse-item>
            </el-collapse>

        </div>
    </div>
</template>

<script>
    export default {
        name: "anniu",
        data(){
            return{
                str1:
                '           <el-row>\n' +
                '                <el-button>默认按钮</el-button>\n' +
                '                <el-button type="primary">主要按钮</el-button>\n' +
                '                <el-button type="success">成功按钮</el-button>\n' +
                '                <el-button type="info">信息按钮</el-button>\n' +
                '                <el-button type="warning">警告按钮</el-button>\n' +
                '                <el-button type="danger">危险按钮</el-button>\n' +
                '            </el-row>\n' +
                '\n' +
                '            <el-row>\n' +
                '                <el-button plain>朴素按钮</el-button>\n' +
                '                <el-button type="primary" plain>主要按钮</el-button>\n' +
                '                <el-button type="success" plain>成功按钮</el-button>\n' +
                '                <el-button type="info" plain>信息按钮</el-button>\n' +
                '                <el-button type="warning" plain>警告按钮</el-button>\n' +
                '                <el-button type="danger" plain>危险按钮</el-button>\n' +
                '            </el-row>\n' +
                '\n' +
                '            <el-row>\n' +
                '                <el-button round>圆角按钮</el-button>\n' +
                '                <el-button type="primary" round>主要按钮</el-button>\n' +
                '                <el-button type="success" round>成功按钮</el-button>\n' +
                '                <el-button type="info" round>信息按钮</el-button>\n' +
                '                <el-button type="warning" round>警告按钮</el-button>\n' +
                '                <el-button type="danger" round>危险按钮</el-button>\n' +
                '            </el-row>\n' +
                '\n' +
                '            <el-row>\n' +
                '                <el-button icon="el-icon-search" circle></el-button>\n' +
                '                <el-button type="primary" icon="el-icon-edit" circle></el-button>\n' +
                '                <el-button type="success" icon="el-icon-check" circle></el-button>\n' +
                '                <el-button type="info" icon="el-icon-message" circle></el-button>\n' +
                '                <el-button type="warning" icon="el-icon-star-off" circle></el-button>\n' +
                '                <el-button type="danger" icon="el-icon-delete" circle></el-button>\n' +
                '            </el-row>'
            }
        }
    }
</script>

<style scoped>
    .el-row{
        margin: 10px;
    }
    .el-collapse-item__header:hover{
        color: #409EFF;
    }
</style>

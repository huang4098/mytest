<template>
    <div>
        <p class="tt-item">Icon 图标</p>
        <p>提供了一套常用的图标集合。</p>
        <p class="tt-item">使用方法</p>
        <p>直接通过设置类名为 el-icon-iconName 来使用即可。例如：</p>
        <br>
        <div><i class="el-icon-edit"></i>&nbsp;&nbsp;&nbsp;{{str1}}</div>
        <div><i class="el-icon-share"></i>&nbsp;&nbsp;&nbsp;{{str2}}</div>
        <div><i class="el-icon-delete"></i>&nbsp;&nbsp;&nbsp;{{str3}}</div>
        <!--<div><el-button type="primary" icon="el-icon-search">搜索</el-button>{{str4}}</div>-->
        <ul>
            <li v-for="list in lists"><i :class="list"></i><p>{{list}}</p></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "tubiao",
        data(){
            return {
                str1: '<i class="el-icon-edit"></i>\n',
                str2: '<i class="el-icon-share"></i>\n',
                str3: '<i class="el-icon-delete"></i>\n',
                str4: '<i class="el-icon-search"></i>\n',
                lists: [
                    'el-icon-edit', 'el-icon-error', 'el-icon-success', 'el-icon-warning', 'el-icon-question', 'el-icon-back',
                    'el-icon-arrow-left', 'el-icon-arrow-down', 'el-icon-arrow-right', 'el-icon-arrow-up', 'el-icon-caret-left', 'el-icon-caret-bottom',
                    'el-icon-caret-top', 'el-icon-caret-right', 'el-icon-d-arrow-left', 'el-icon-d-arrow-right', 'el-icon-minus', 'el-icon-plus',
                    'el-icon-remove', 'el-icon-circle-plus', 'el-icon-remove-outline', 'el-icon-circle-plus-outline', 'el-icon-close', 'el-icon-check',
                    'el-icon-circle-close','el-icon-circle-check','el-icon-circle-close-outline','el-icon-circle-check-outline','el-icon-zoom-out','el-icon-zoom-in',
                    'el-icon-refresh','el-icon-share','el-icon-setting', 'el-icon-upload2', 'el-icon-upload', 'el-icon-download','el-icon-loading', '', '', '', '', '',
                ]
            };
        },

    }
</script>

<style scoped>
    ul{
        list-style: none;
        display: flex;
        flex-wrap: wrap;
    }
    li{list-style: none;margin: 20px;text-align: center;width: 200px;font-size: 20px;}
</style>

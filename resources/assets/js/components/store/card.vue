<template>
    <Card>
        <div>
            <Icon type="md-print"></Icon>
            <h3>{{billingName}}</h3>
        </div>
    </Card>
</template>
<script>
    export default {
        name: 'CardA',
        props: ['billingName']
    }
</script>
<style lang="scss">
    .ivu-card-body {
        h3 {
            display: inline-block;
        }
        &::after {
            content: '>';
            display: block;
            position:absolute;
            right: 10px;
            top: 15px;
        }
    }
</style>

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ReactWX = require('../../../ReactWX');

var _ReactWX2 = _interopRequireDefault(_ReactWX);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const WEEK = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];

function P() {
    this.state = {
        date: '',
        orginCity: '鼓浪屿',
        targerCity: '厦门'
    };
}

P = _ReactWX2.default.miniCreateClass(P, _ReactWX2.default.Component, {
    componentDidMount: function () {
        _ReactWX2.default.getApp().globalData.dateSelect = new Date();
    },
    componentDidShow: function () {
        let date = _ReactWX2.default.getApp().globalData.dateSelect;
        date = date.getMonth() + 1 + '月' + date.getDate() + '日 ' + WEEK[date.getDay()];
        this.setState({ date });
    },
    fun_tip: function () {
        wx.showModal({
            title: '提示',
            content: '该部分仅展示，无具体功能!',
            showCancel: false
        });
    },
    toDateSelect: function () {
        wx.navigateTo({
            url: '../../demo/calendar/index'
        });
    },
    exChangeCity: function () {
        let curData = this.state.orginCity;
        this.setState({ orginCity: this.state.targerCity });
        this.setState({ targerCity: curData });
    },
    render: function () {
        var h = _ReactWX2.default.createElement;

        return h('view', { 'class': 'boat' }, h('view', { 'class': 'content' }, h('view', { 'class': 'city-select-container' }, h('view', { onTap: this.fun_tip.bind(this), 'class': 'orgin-city-wrapper', 'data-tap-uid': 'e2743', 'data-class-uid': 'c2622', 'data-instance-uid': this.props.instanceUid }, h('view', { 'class': 'tip-wrapper' }, h('view', { 'class': 'dot' }), h('text', null, '\u51FA\u53D1')), h('view', { 'class': 'orgin-ctiy' }, this.state.orginCity)), h('view', { onTap: this.exChangeCity.bind(this), 'class': 'switch-logo',
            'data-tap-uid': 'e3340', 'data-class-uid': 'c2622', 'data-instance-uid': this.props.instanceUid }, h('image', { src: '../../../assets/image/switch.png' })), h('view', { onTap: this.fun_tip.bind(this), 'class': 'target-city-wrapper', 'data-tap-uid': 'e3725', 'data-class-uid': 'c2622', 'data-instance-uid': this.props.instanceUid }, h('view', { 'class': 'tip-wrapper' }, h('view', { 'class': 'dot' }), '\u5230\u8FBE'), h('view', { 'class': 'target-ctiy' }, this.state.targerCity))), h('view', { onTap: this.toDateSelect.bind(this), 'class': 'date-select-container', 'data-tap-uid': 'e4350', 'data-class-uid': 'c2622', 'data-instance-uid': this.props.instanceUid }, h('view', { 'class': 'title' }, '\u51FA\u53D1\u65E5\u671F'), h('view', { 'class': 'date' }, this.state.date)), h('view', { onTap: this.fun_tip.bind(this), 'class': 'search-btn', 'data-tap-uid': 'e4825', 'data-class-uid': 'c2622', 'data-instance-uid': this.props.instanceUid }, '\u5F00\u59CB\u67E5\u8BE2')));;
    },
    classUid: 'c2622'
}, {});
Page(_ReactWX2.default.createPage(P, 'pages/demo/boat/index'));

exports.default = P;
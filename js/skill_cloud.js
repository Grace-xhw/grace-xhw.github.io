// 路径配置
require.config({
  paths: {
    echarts: 'http://echarts.baidu.com/build/dist'
  }
});

require(['echarts', 'echarts/chart/wordCloud'],
  function(ec) {
    function createRandomItemStyle() {
      return {
        normal: {
          color: 'rgb(' + [
            Math.round(Math.random() * 160),
            Math.round(Math.random() * 160),
            Math.round(Math.random() * 160)
          ].join(',') + ')'
        }
      };
    }

    option = {
      tooltip: {
        show: true,
        showContent: true
      },
      series: [{
        name: 'Skill Tree',
        type: 'wordCloud',
        size: ['80%', '70%'],
        textRotation: [0, 30, 45, 90, -45, -30],
        textPadding: 0,
        autoSize: {
          enable: true,
          minSize: 14
        },
        effect: {
          show: true,
          type: 'scale',
          loop: true,
          period: 15,
          scaleSize: 2,
          bounceDistance: 10,
          color: null,
          shadowColor: null,
          shadowBlur: 0,
        },
        data: [{
          name: "HTML",
          value: 10000,
          itemStyle: createRandomItemStyle()
        }, {
          name: "TEM-8",
          value: 6181,
          itemStyle: createRandomItemStyle()
        }, {
          name: "CSS",
          value: 4386,
          itemStyle: createRandomItemStyle()
        }, {
          name: "Sublime Text",
          value: 4055,
          itemStyle: createRandomItemStyle()
        }, {
          name: "Javascript",
          value: 2467,
          itemStyle: createRandomItemStyle()
        }, {
          name: "jQuery",
          value: 2244,
          itemStyle: createRandomItemStyle()
        }, {
          name: "Boostrap",
          value: 1898,
          itemStyle: createRandomItemStyle()
        }, {
          name: "Photoshop",
          value: 1484,
          itemStyle: createRandomItemStyle()
        }, {
          name: "Corel Videostudio",
          value: 1112,
          itemStyle: createRandomItemStyle()
        }, {
          name: "HTML5",
          value: 965,
          itemStyle: createRandomItemStyle()
        }, {
          name: "普通话二甲",
          value: 847,
          itemStyle: createRandomItemStyle()
        }, {
          name: "CSS3",
          value: 582,
          itemStyle: createRandomItemStyle()
        }, {
          name: "Git",
          value: 555,
          itemStyle: createRandomItemStyle()
        }, {
          name: "Firebug",
          value: 550,
          itemStyle: createRandomItemStyle()
        }, {
          name: "Less",
          value: 462,
          itemStyle: createRandomItemStyle()
        }, {
          name: "Github",
          value: 366,
          itemStyle: createRandomItemStyle()
        }]
      }]
    };

    setTimeout(function(){
      var myChart = ec.init(document.getElementById('skill_cloud'));
      myChart.setOption(option);
    },1000);
  }

);

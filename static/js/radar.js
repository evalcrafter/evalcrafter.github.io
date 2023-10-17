
  var dom = document.getElementById('container');
  var myChart = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false
  });
  var app = {};
  
  var option;

  option = {
    color: ['#67F9D8', '#FFE434', '#56A3F1', '#FF917C', '#999'],
    legend: {},
    radar: [
      {
        indicator: [
          { text: 'Visual\n Quality', max: 100 },
          { text: 'Text-to-Video\n Align', max: 100 },
          { text: 'Temporal\n Consistency', max: 100 },
          { text: 'Motion\n Quality', max: 100 },
          { text: 'User\n Score', max: 100 },
        ],
        center: ['25%', '30%'],
        radius: 100,
        axisName: {
          color: '#428BD4',
          // backgroundColor: '#666',
          align:"center",
          borderRadius: 3,
          padding: [10, 10]
        }
      },
      {
        indicator: [
          { text: 'Visual\n Quality', max: 100 },
          { text: 'Text-to-Video\n Align', max: 100 },
          { text: 'Temporal\n Consistency', max: 100 },
          { text: 'Motion\n Quality', max: 100 },
          { text: 'User\n Score', max: 100 },
        ],
        center: ['50%', '30%'],
        radius: 100,
        axisName: {
          color: '#428BD4',
          // backgroundColor: '#666',
          align:"center",
          borderRadius: 3,
          padding: [10, 10]
        }
      },
      {
        indicator: [
          { text: 'Visual\n Quality', max: 100 },
          { text: 'Text-to-Video\n Align', max: 100 },
          { text: 'Temporal\n Consistency', max: 100 },
          { text: 'Motion\n Quality', max: 100 },
          { text: 'User\n Score', max: 100 },
        ],
        center: ['75%', '30%'],
        radius: 100,
        axisName: {
          color: '#428BD4',
          // backgroundColor: '#666',
          align:"center",
          borderRadius: 3,
          padding: [10, 10]
        }
      },
      {
        indicator: [
          { text: 'Visual\n Quality', max: 100 },
          { text: 'Text-to-Video\n Align', max: 100 },
          { text: 'Temporal\n Consistency', max: 100 },
          { text: 'Motion\n Quality', max: 100 },
          { text: 'User\n Score', max: 100 },
        ],
        center: ['25%', '70%'],
        radius: 100,
        axisName: {
          color: '#428BD4',
          // backgroundColor: '#666',
          align:"center",
          borderRadius: 3,
          padding: [10, 10]
        }
      },
      {
        indicator: [
          { text: 'Visual\n Quality', max: 100 },
          { text: 'Text-to-Video\n Align', max: 100 },
          { text: 'Temporal\n Consistency', max: 100 },
          { text: 'Motion\n Quality', max: 100 },
          { text: 'User\n Score', max: 100 },
        ],
        center: ['50%', '70%'],
        radius: 100,
        axisName: {
          color: '#428BD4',
          // backgroundColor: '#666',
          align:"center",
          borderRadius: 3,
          padding: [10, 10]
        }
      },
      {
        indicator: [
          { text: 'Visual\n Quality', max: 100 },
          { text: 'Text-to-Video\n Align', max: 100 },
          { text: 'Temporal\n Consistency', max: 100 },
          { text: 'Motion\n Quality', max: 100 },
          { text: 'User\n Score', max: 100 },
        ],
        center: ['75%', '70%'],
        radius: 100,
        axisName: {
          color: '#428BD4',
          // backgroundColor: '#666',
          align:"center",
          borderRadius: 3,
          padding: [10, 10]
        }
      }
],
series: [
  {
    type: 'radar',
    radarIndex: 0,
    data: [
      {
        value: [100, 93, 50, 90, 70, 60],
        name: 'Gen2',
        areaStyle: {
          color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
            {
              color: 'rgba(255, 145, 124, 0.1)',
              offset: 0
            },
            {
              color: 'rgba(255, 145, 124, 0.9)',
              offset: 1
            }
          ])
        }
      },
      {
        value: [100, 93, 50, 90, 70, 60],
        name: 'PikaLab',
        areaStyle: {
          color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
            {
              color: 'rgba(255, 145, 124, 0.1)',
              offset: 0
            },
            {
              color: 'rgba(255, 145, 124, 0.9)',
              offset: 1
            }
          ])
        }
      },
      {
        value: [90, 90, 90, 100, 99, 70],
        name: 'Floor33(VideoCrafter)',
        symbol: 'rect',
        symbolSize: 12,
        lineStyle: {
          type: 'dashed'
        },
        label: {
          show: true,
          formatter: function (params) {
            return params.value;
          }
        }
      },
      {
        value: [100, 93, 50, 90, 70, 60],
        name: 'ModelScope-XL',
        areaStyle: {
          color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
            {
              color: 'rgba(255, 145, 124, 0.1)',
              offset: 0
            },
            {
              color: 'rgba(255, 145, 124, 0.9)',
              offset: 1
            }
          ])
        }
      },
      {
        value: [100, 93, 50, 90, 70, 60],
        name: 'Zeroscope',
        areaStyle: {
          color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
            {
              color: 'rgba(255, 145, 124, 0.1)',
              offset: 0
            },
            {
              color: 'rgba(255, 145, 124, 0.9)',
              offset: 1
            }
          ])
        }
      }
    ]
  },
  {
    type: 'radar',
    radarIndex: 1,
    data: [
      {
        value: [100, 93, 50, 90, 70, 60],
        name: 'Gen2',
        areaStyle: {
          color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
            {
              color: 'rgba(255, 145, 124, 0.1)',
              offset: 0
            },
            {
              color: 'rgba(255, 145, 124, 0.9)',
              offset: 1
            }
          ])
        }
      },
      {
        value: [100, 93, 50, 90, 70, 60],
        name: 'PikaLab',
        areaStyle: {
          color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
            {
              color: 'rgba(255, 145, 124, 0.1)',
              offset: 0
            },
            {
              color: 'rgba(255, 145, 124, 0.9)',
              offset: 1
            }
          ])
        }
      },
      {
        value: [90, 90, 90, 100, 99, 70],
        name: 'Floor33(VideoCrafter)',
        symbol: 'rect',
        symbolSize: 12,
        lineStyle: {
          type: 'dashed'
        },
        label: {
          show: true,
          formatter: function (params) {
            return params.value;
          }
        }
      },
      {
        value: [100, 93, 50, 90, 70, 60],
        name: 'ModelScope-XL',
        areaStyle: {
          color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
            {
              color: 'rgba(255, 145, 124, 0.1)',
              offset: 0
            },
            {
              color: 'rgba(255, 145, 124, 0.9)',
              offset: 1
            }
          ])
        }
      },
      {
        value: [100, 93, 50, 90, 70, 60],
        name: 'Zeroscope',
        areaStyle: {
          color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
            {
              color: 'rgba(255, 145, 124, 0.1)',
              offset: 0
            },
            {
              color: 'rgba(255, 145, 124, 0.9)',
              offset: 1
            }
          ])
        }
      }
    ]
  },
  {
    type: 'radar',
    radarIndex: 2,
    data: [
      {
        value: [100, 93, 50, 90, 70, 60],
        name: 'Gen2',
        areaStyle: {
          color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
            {
              color: 'rgba(255, 145, 124, 0.1)',
              offset: 0
            },
            {
              color: 'rgba(255, 145, 124, 0.9)',
              offset: 1
            }
          ])
        }
      },
      {
        value: [100, 93, 50, 90, 70, 60],
        name: 'PikaLab',
        areaStyle: {
          color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
            {
              color: 'rgba(255, 145, 124, 0.1)',
              offset: 0
            },
            {
              color: 'rgba(255, 145, 124, 0.9)',
              offset: 1
            }
          ])
        }
      },
      {
        value: [90, 90, 90, 100, 99, 70],
        name: 'Floor33(VideoCrafter)',
        symbol: 'rect',
        symbolSize: 12,
        lineStyle: {
          type: 'dashed'
        },
        label: {
          show: true,
          formatter: function (params) {
            return params.value;
          }
        }
      },
      {
        value: [100, 93, 50, 90, 70, 60],
        name: 'ModelScope-XL',
        areaStyle: {
          color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
            {
              color: 'rgba(255, 145, 124, 0.1)',
              offset: 0
            },
            {
              color: 'rgba(255, 145, 124, 0.9)',
              offset: 1
            }
          ])
        }
      },
      {
        value: [100, 93, 50, 90, 70, 60],
        name: 'Zeroscope',
        areaStyle: {
          color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
            {
              color: 'rgba(255, 145, 124, 0.1)',
              offset: 0
            },
            {
              color: 'rgba(255, 145, 124, 0.9)',
              offset: 1
            }
          ])
        }
      }
    ]
  },
  {
    type: 'radar',
    radarIndex: 3,
    data: [
      {
        value: [100, 93, 50, 90, 70, 60],
        name: 'Gen2',
        areaStyle: {
          color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
            {
              color: 'rgba(255, 145, 124, 0.1)',
              offset: 0
            },
            {
              color: 'rgba(255, 145, 124, 0.9)',
              offset: 1
            }
          ])
        }
      },
      {
        value: [100, 93, 50, 90, 70, 60],
        name: 'PikaLab',
        areaStyle: {
          color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
            {
              color: 'rgba(255, 145, 124, 0.1)',
              offset: 0
            },
            {
              color: 'rgba(255, 145, 124, 0.9)',
              offset: 1
            }
          ])
        }
      },
      {
        value: [90, 90, 90, 100, 99, 70],
        name: 'Floor33(VideoCrafter)',
        symbol: 'rect',
        symbolSize: 12,
        lineStyle: {
          type: 'dashed'
        },
        label: {
          show: true,
          formatter: function (params) {
            return params.value;
          }
        }
      },
      {
        value: [100, 93, 50, 90, 70, 60],
        name: 'ModelScope-XL',
        areaStyle: {
          color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
            {
              color: 'rgba(255, 145, 124, 0.1)',
              offset: 0
            },
            {
              color: 'rgba(255, 145, 124, 0.9)',
              offset: 1
            }
          ])
        }
      },
      {
        value: [100, 93, 50, 90, 70, 60],
        name: 'Zeroscope',
        areaStyle: {
          color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
            {
              color: 'rgba(255, 145, 124, 0.1)',
              offset: 0
            },
            {
              color: 'rgba(255, 145, 124, 0.9)',
              offset: 1
            }
          ])
        }
      }
    ]
  },
  {
    type: 'radar',
    radarIndex: 4,
    data: [
      {
        value: [100, 93, 50, 90, 70, 60],
        name: 'Gen2',
        areaStyle: {
          color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
            {
              color: 'rgba(255, 145, 124, 0.1)',
              offset: 0
            },
            {
              color: 'rgba(255, 145, 124, 0.9)',
              offset: 1
            }
          ])
        }
      },
      {
        value: [100, 93, 50, 90, 70, 60],
        name: 'PikaLab',
        areaStyle: {
          color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
            {
              color: 'rgba(255, 145, 124, 0.1)',
              offset: 0
            },
            {
              color: 'rgba(255, 145, 124, 0.9)',
              offset: 1
            }
          ])
        }
      },
      {
        value: [90, 90, 90, 100, 99, 70],
        name: 'Floor33(VideoCrafter)',
        symbol: 'rect',
        symbolSize: 12,
        lineStyle: {
          type: 'dashed'
        },
        label: {
          show: true,
          formatter: function (params) {
            return params.value;
          }
        }
      },
      {
        value: [100, 93, 50, 90, 70, 60],
        name: 'ModelScope-XL',
        areaStyle: {
          color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
            {
              color: 'rgba(255, 145, 124, 0.1)',
              offset: 0
            },
            {
              color: 'rgba(255, 145, 124, 0.9)',
              offset: 1
            }
          ])
        }
      },
      {
        value: [100, 93, 50, 90, 70, 60],
        name: 'Zeroscope',
        areaStyle: {
          color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
            {
              color: 'rgba(255, 145, 124, 0.1)',
              offset: 0
            },
            {
              color: 'rgba(255, 145, 124, 0.9)',
              offset: 1
            }
          ])
        }
      }
    ]
  },
  {
    type: 'radar',
    radarIndex: 5,
    data: [
      {
        value: [100, 93, 50, 90, 70, 60],
        name: 'Gen2',
        areaStyle: {
          color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
            {
              color: 'rgba(255, 145, 124, 0.1)',
              offset: 0
            },
            {
              color: 'rgba(255, 145, 124, 0.9)',
              offset: 1
            }
          ])
        }
      },
      {
        value: [100, 93, 50, 90, 70, 60],
        name: 'PikaLab',
        areaStyle: {
          color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
            {
              color: 'rgba(255, 145, 124, 0.1)',
              offset: 0
            },
            {
              color: 'rgba(255, 145, 124, 0.9)',
              offset: 1
            }
          ])
        }
      },
      {
        value: [90, 90, 90, 100, 99, 70],
        name: 'Floor33(VideoCrafter)',
        symbol: 'rect',
        symbolSize: 12,
        lineStyle: {
          type: 'dashed'
        },
        label: {
          show: true,
          formatter: function (params) {
            return params.value;
          }
        }
      },
      {
        value: [100, 93, 50, 90, 70, 60],
        name: 'ModelScope-XL',
        areaStyle: {
          color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
            {
              color: 'rgba(255, 145, 124, 0.1)',
              offset: 0
            },
            {
              color: 'rgba(255, 145, 124, 0.9)',
              offset: 1
            }
          ])
        }
      },
      {
        value: [100, 93, 50, 90, 70, 60],
        name: 'Zeroscope',
        areaStyle: {
          color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
            {
              color: 'rgba(255, 145, 124, 0.1)',
              offset: 0
            },
            {
              color: 'rgba(255, 145, 124, 0.9)',
              offset: 1
            }
          ])
        }
      }
    ]
  }
]
};


  if (option && typeof option === 'object') {
    myChart.setOption(option);
  }

  window.addEventListener('resize', myChart.resize);

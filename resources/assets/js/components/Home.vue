<template>
  <section class="content home">
    <main>
      <Row>
        <Col span="16">
          <h2>Current Status</h2>
        </Col>
        <Col span="8" style="text-align: right;">
          <ButtonGroup>
              <Button>Share</Button>
              <Button>Export</Button>
          </ButtonGroup>
          <Button>
              <Icon type="ios-calendar"></Icon>
              This Week
          </Button>
        </Col>
      </Row>

      <Row class="top">
        <Col span="8">
          <div class="title">Sales revenue</div>
          <Row>
            <Col span="16">$10000</Col>
            <Col span="8">
              <Button>button</Button>
            </Col>
          </Row>
        </Col>              
        <Col span="8">
          <div class="title">Sales per customer</div>
          <Row>
            <Col span="16">$5000</Col>
            <Col span="8">
              <Button>button</Button>
            </Col>
          </Row>
        </Col>
        <Col span="8">
          <div class="title">Sales revenue</div>
          <Row>
            <Col span="16">$10000</Col>
            <Col span="8">
              <Button>button</Button>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col span="8">
          <div class="title">Sales per customer</div>
          <Row>
            <Col span="16">$5000</Col>
            <Col span="8">
              <Button>button</Button>
            </Col>
          </Row>
        </Col>
        <Col span="16">
          <canvas id="myChart" width="900" height="200"></canvas>
        </Col>
      </Row>        


      <h2>Section title</h2>
      <div class="table-responsive">
        <Table stripe :columns="columns1" :data="data1"></Table>
      </div>
      <div style="padding-bottom:30px;width:100%;"></div>
      <h2>Section title</h2>
      <div class="table-responsive">
        <Table stripe :columns="columns2" :data="data2"></Table>
      </div>
      <div style="padding-bottom:30px;width:100%;"></div>

    </main>
  </section>
</template>
<script>
import { mapGetters } from 'vuex';

  export default {
    data () {
      return {
        columns1: [
          {
            title: '#',
            key: 'Header0'
          },
          {
            title: 'Header',
            key: 'Header1'
          },
          {
            title: 'Header',
            key: 'Header2'
          },
          {
            title: 'Header',
            key: 'Header3'
          },
          {
            title: 'Header',
            key: 'Header4'
          }
        ],
        data1: [
          {
            Header0: '1,001',
            Header1: 'John Brown',
            Header2: 'consectetur',
            Header3: 'Praesent',
            Header4: '2016-10-03'
          },
          {
            Header0: '1,002',
            Header1: 'John Brown',
            Header2: 'consectetur',
            Header3: 'Praesent',
            Header4: '2016-10-03'
          },
          {
            Header0: '1,003',
            Header1: 'John Brown',
            Header2: 'consectetur',
            Header3: 'Praesent',
            Header4: '2016-10-03'
          },
          {
            Header0: '1,004',
            Header1: 'John Brown',
            Header2: 'consectetur',
            Header3: 'Praesent',
            Header4: '2016-10-03'
          },
          {
            Header0: '1,005',
            Header1: 'John Brown',
            Header2: 'consectetur',
            Header3: 'Praesent',
            Header4: '2016-10-03'
          }          
        ],
        columns2: [
          {
            title: '#',
            key: 'Header0'
          },
          {
            title: 'Header',
            key: 'Header1'
          },
          {
            title: 'Header',
            key: 'Header2'
          },
          {
            title: 'Header',
            key: 'Header3'
          },
          {
            title: 'Header',
            key: 'Header4'
          }
        ],
        data2: [
          {
            Header0: '1,001',
            Header1: 'John Brown',
            Header2: 'consectetur',
            Header3: 'Praesent',
            Header4: '2016-10-03'
          },
          {
            Header0: '1,002',
            Header1: 'John Brown',
            Header2: 'consectetur',
            Header3: 'Praesent',
            Header4: '2016-10-03'
          },
          {
            Header0: '1,003',
            Header1: 'John Brown',
            Header2: 'consectetur',
            Header3: 'Praesent',
            Header4: '2016-10-03'
          },
          {
            Header0: '1,004',
            Header1: 'John Brown',
            Header2: 'consectetur',
            Header3: 'Praesent',
            Header4: '2016-10-03'
          },
          {
            Header0: '1,005',
            Header1: 'John Brown',
            Header2: 'consectetur',
            Header3: 'Praesent',
            Header4: '2016-10-03'
          }          
        ]
      }
    },
    mounted: function() {
      var ctx = document.getElementById("myChart");
			var myChart = new Chart(ctx, {
				type: 'line',
				data: {
					labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
					datasets: [{
						data: [15339, 21345, 18483, 24003, 23489, 24092, 12034],
						lineTension: 0,
						backgroundColor: 'transparent',
						borderColor: '#007bff',
						borderWidth: 4,
						pointBackgroundColor: '#007bff'
					}]
				},
				options: {
					scales: {
						yAxes: [{
							ticks: {
								beginAtZero: false
							}
						}]
					},
					legend: {
						display: false,
					}
				}
			});
    },
    computed: {
      ...mapGetters([
        'User'
      ]),
      userName () {
        return this.User.name;
      },
    }
  }
</script>
<style lang="scss">
  section.home {
    .ivu-row {
      padding: 20px 0;
      box-sizing: border-box;
    }
    .top {
      border-top: 1px  solid rgba(0,0,0,0.1);
    }
    main {
      padding: 0 20px;
      box-sizing: border-box;
      h2 {
        font-size: 2em;
        margin-bottom: 10px;
      }
    }  
  }
  
</style>

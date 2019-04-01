<template>
  <div class="hello"> 
   <div style="margin-top:40px;">Developers' lives matter.</div>
   <div>Company filters</div>
    <div class='icu996'>
<search
      @result-click="resultClick"
      @on-change="getResult"
      :results="results"
      v-model="value"
      position="absolute"
      auto-scroll-to-top
      top="120px"
      @on-focus="onFocus"
      @on-cancel="onCancel"
      @on-submit="onSubmit"
      ref="search" ></search>
    <!-- <group>
      <cell title="keyword">{{ value }}</cell>
    </group> -->

    <group style="top:25px;position:relative;">
      <!-- <cell
        title="static position demo"
        is-link
        link="/component/search-static"></cell> -->
         <x-table :cell-bordered="false" style="background-color:rgb(236, 231, 228);">
        <thead>
          <tr>
            <th>Company name</th>
            <th>Working hours</th> 
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{blackCompany}}</td>
            <td>{{workingHours}}</td>
            
          </tr> 
        </tbody>
      </x-table>

    </group>
    
    <div style="padding:15px;    margin-top: 36px;">
       <div>可输入‘JD’，或者‘YZ’做测试使用。</div>
      <!-- <x-button class='clearBtn'
        @click.native="clearBtn"
        type="primary">添加996icu黑名单</x-button>  -->
 <flexbox class="vux-flexbox vux-flex-row"> 
        <flexbox-item class="weui-btn vux-x-button-no-border weui-btn_default"  style="margin-left: 8px;">
             <div class="flex-demo">  <x-button @click.native="addGit" class="weui-btn vux-x-button-no-border weui-btn_default"  
             style="background: linear-gradient(90deg, rgb(29, 98, 240), #de335e); color: rgb(255, 255, 255);">github添砖加瓦</x-button> 
             </div>
        </flexbox-item>
         <flexbox-item class="weui-btn vux-x-button-no-border weui-btn_default" style="margin-left: 8px;margin-top:0;">
             <div class="flex-demo"> <x-button @click.native="icuUrl" class="weui-btn vux-x-button-no-border weui-btn_default"  
             style="background: linear-gradient(90deg, rgb(29, 98, 240),  #de335e); color: rgb(255, 255, 255);">996icu友情链接</x-button>
             </div>
         </flexbox-item> 
    </flexbox>
 
    </div>

    </div>
  </div>

</template>
 
<script>
    export default {
        data() {
            return {
                testNull:'',
                ourVuex:this.$store.state.ourVuex,
                more:false ,
                results: [],
                value: '',
                blackCompany:'',
                workingHours:''
            };
        }, 
        created() {},
        mounted() { 
        },
        methods: {
            addGit:function(){
             window.location.href='https://github.com/996CompanyFilters/996ComFilters';
            },
            icuUrl:function(){
                   window.location.href='https://github.com/995icu/996ICU';
            },
           
              setFocus () {
                // this.$refs.search.setFocus()
                },
                resultClick (item) {
                window.alert('you click the result item: ' + JSON.stringify(item))
                },
                getResult (val) {
                // console.log('on-change', this.$jsonData)
                // this.results = val ? getResult(this.value) : []
                for(let name of this.$jsonData){ 
                    if(Object.is(val, name.name)){
                    console.log(val+name.workingHours);
                    this.blackCompany=name.name;
                    this.workingHours=name.workingHours; 
                 } 
                }
                },
                onSubmit () {
                // this.$refs.search.setBlur()
                // this.$vux.toast.show({
                //     type: 'text',
                //     position: 'top',
                //     text: 'on submit'
                // })
                },
                onFocus () {
                console.log('on focus')
                },
                onCancel () {
                console.log('on cancel')
                } 
        } 
    };
     function getResult (val) {
        let rs = []
        for (let i = 0; i < 20; i++) {
            rs.push({
            title: `${val} result: ${i + 1} `,
            other: i
            })
  }
  return rs
}
</script>
<style>
.vux-flexbox{
    margin-top:15vw;
} 
.icu996{
margin-top:100px;
 
} 
.clearBtn{
    width:30%;
}
.addCompany{
    width:30%;
} 
search{
    background-color:#c03255;
}
</style>
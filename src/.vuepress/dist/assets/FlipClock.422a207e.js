import p from"./FlipItem.8829ad2c.js";import{_}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as f,b as o,r as d,p as h,l as A,a as u}from"./app.b0cd9f1d.js";function l(t=new Date){const s=t.getHours(),n=t.getMinutes(),i=t.getSeconds();return[...c(s),...c(n),...c(i)]}function c(t){return t>=10?(""+t).split("").map(s=>Number(s)):[0,t]}const v={components:{FlipItem:p},data(){return{timeArr:l()}},mounted(){this.startTimer()},beforeDestroy(){this.stopTimer()},methods:{startTimer(){this.stopTimer(),this.timer=setTimeout(()=>{this.timeArr=l(),this.startTimer()},1e3)},stopTimer(){clearTimeout(this.timer)}}},m=t=>(h("data-v-0fc31f44"),t=t(),A(),t),T={class:"clock-container"},k=m(()=>u("div",{class:"colon"},null,-1)),g=m(()=>u("div",{class:"colon"},null,-1));function I(t,s,n,i,e,x){const r=d("flip-item");return a(),f("div",T,[o(r,{total:2,current:e.timeArr[0]},null,8,["current"]),o(r,{total:9,current:e.timeArr[1]},null,8,["current"]),k,o(r,{total:5,current:e.timeArr[2]},null,8,["current"]),o(r,{total:9,current:e.timeArr[3]},null,8,["current"]),g,o(r,{total:5,current:e.timeArr[4]},null,8,["current"]),o(r,{total:9,current:e.timeArr[5]},null,8,["current"])])}const b=_(v,[["render",I],["__scopeId","data-v-0fc31f44"],["__file","FlipClock.vue"]]);export{b as default};

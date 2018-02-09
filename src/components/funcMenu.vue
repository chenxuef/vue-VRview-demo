<template>
    <div class="func-menu" id="func-menu">
        <div class="author">
            <span>作者：{{author}}</span>&#12288;&#12288;
            <span>人气：{{popular}}</span>
        </div>
        <div class="handle">
            <el-button class="full" v-bind:class="{'is-full': isFull}" @click="clickFull"></el-button>
            <el-button class="music" v-bind:class="{'is-music': isMusic}" @click="clickMusic"></el-button>
            <el-button class="icon-vr" @click="clickVR"></el-button>
            <el-button class="see" @click="clickSee"></el-button>
        </div>
        <div class="func">
            <div class="func-btn">
                <el-button class="coordinate" v-bind:class="{'is-coordinate': isCoordinate}" 
                @click="clickCoordinate"></el-button>
                <span>足迹</span>
            </div>
            <div class="func-btn">
                <el-button class="share" @click="clickShare"></el-button>
                <span>分享</span>
            </div>
            <div class="func-btn">
                <el-button class="laud" v-bind:class="{'is-laud': isLaud}" @click="clickLaud"></el-button>
                <span>{{applaud}}</span>
            </div>
            <div class="func-btn">
                <el-button class="comment" @click="clickComment"></el-button>
                <span>说一说</span>
            </div>
        </div>
        <div class="view-mode">
            <p>视角切换</p>
            <div class="view-choice">
                <div class="view-select">
                    <div class="view-img normal"></div>
                    <span>正常</span>
                </div>
                <div class="view-select">
                    <div class="view-img planet"></div>
                    <span>小行星</span>
                </div>
                <div class="view-select">
                    <div class="view-img fisheye"></div>
                    <span>鱼眼</span>
                </div>
                <div class="view-select">
                    <div class="view-img crystal-ball"></div>
                    <span>水晶球</span>
                </div>
            </div>
        </div>
    </div>
    
</template>

<!-- ==========================这个界面的部分数据由前界面点击跳转时传入，读取传入数据绑定到界面======================================= -->

<script>
export default {
    //el: '#func-menu',
    name: 'funcMenu',
    data() {
        return {
            author: '李某某',    //作者
            popular: 1152,    //人气
            isLaud: false,    //赞
            applaud: 586,   //赞数
            isCoordinate: false,    //足迹
            isFull: false,    //全屏
            isMusic: false,    //音乐
            isComment: [],    //评论
            isSee: false    //查看窗口显示
        }
    },
    methods: {
        clickFull: function () {
            //点击 全屏 按钮
            // this.isFull==false ? this.isFull=true : this.isFull=false;
            if ( this.isFull == false ) {
                this.isFull = true;
                this.launchFullscreen( document.body );
            }else{
                this.isFull = false;
                this.exitFullscreen();
            }
        },
        //进入全屏
        launchFullscreen: function ( elem ) {
            if( elem.requestFullScreen ){ 
                elem.requestFullscreen(); 
            }
            else if( elem.mozRequestFullScreen ){  
                elem.mozRequestFullScreen();  
            }
            else if( elem.oRequestFullscreen ){  
                elem.oRequestFullscreen();    
            }
            else if( elem.webkitRequestFullScreen ){  
                elem.webkitRequestFullScreen();    
            }
            else if( elem.msRequestFullscreen ){  
                elem.msRequestFullscreen();
            }
        },
        //退出全屏
        exitFullscreen: function () {
            if(document.webkitCancelFullScreen){  
                document.webkitCancelFullScreen();      
            }
            else if(document.mozCancelFullScreen){  
                document.mozCancelFullScreen();  
            }
            else if(document.cancelFullScreen){  
                document.cancelFullScreen();  
            }
            else if(document.exitFullscreen){  
                document.exitFullscreen();  
            }
            else if(document.msExitFullscreen){  
                document.msExitFullscreen();  
            }
        },
        clickMusic: function () {
            console.log("点击 音乐 按钮")
            this.isMusic==false ? this.isMusic=true : this.isMusic=false;
        },
        clickVR: function () {
            console.log("点击 VR 按钮")
        },
        clickSee: function () {
            console.log("点击 查看 按钮")
            this.isSee = true;

        },
        clickCoordinate: function () {
            console.log("点击 足迹 按钮")
        },
        clickShare: function () {
            console.log("点击 分享 按钮")
        },
        clickLaud: function () {
            console.log("点击 赞 按钮")
            if ( this.isLaud==false ) {
                this.isLaud = true;
                // this.applaud = this.applaud += 1;
                this.applaud++
            }
        },
        clickComment: function () {
            console.log("点击 评论 按钮")
        }
    }
}
</script>

<!-- ================================================================= -->

<style scoped>
/* --------------功能按钮----------- */
.func-menu{
    width: 100%;
    height: 100%;
    position: relative;
    background: #fff center no-repeat;
    background-image: url(../assets/image/vrbg.jpg);
    color: #fff;
}
.author{
    position: absolute;
    top: 8px;
    left: 8px;
    font-size: .87rem;
}
.handle{
    position: absolute;
    top: 8px;
    right: 8px;
    width: 35px;
}
.el-button{
    background: rgba(0, 0, 0, 0.5);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 70%;
    border-color: #48494a;
    border-radius: 50%;
    color: #fff;
    padding: 0;
    width: 33px;
    height: 33px;
}
.el-button:hover, .el-button:focus {
    border-color: #48494a;
    background-color: rgba(0, 0, 0, 0.5);
}
.el-button:active {
    border-color: #48494a;
    outline: 0;
}
.el-button+.el-button{
    margin-left: 0;
    margin-top: 10px;
}
.func .el-button{
    background-color: #24369a;
    width: 37px;
    height: 37px;
    background-size: 60%;
}
.func .el-button:hover, .func .el-button:focus {
    border-color: #48494a;
    background-color: #24369a;
}
.func .el-button:active {
    border-color: #48494a;
    outline: 0;
}
.handle .full{
    background-image: url(../assets/icon/full.png);
}
.handle .music{
    background-image: url(../assets/icon/music-on.png);
}
.handle .icon-vr{
    background-image: url(../assets/icon/icon-vr.png);
}
.handle .see{
    background-image: url(../assets/icon/see.png);
}
.handle .is-full{
    background-image: url(../assets/icon/full-esc.png);
}
.handle .is-music{
    background-image: url(../assets/icon/music-off.png);
}
.func{
    position: absolute;
    bottom: 8px;
    right: 1rem;
    display: flex;
}
.func-btn{
    width: 37px;
    display: inline;
    margin-left: 10px;
    font-size: .7rem;
}
.func .coordinate{
    background-image: url(../assets/icon/coordinate.png);
}
.func .share{
    background-image: url(../assets/icon/share.png);
}
.func .laud{
    background-image: url(../assets/icon/laud.png);
}
.func .comment{
    background-image: url(../assets/icon/comment.png);
}
.func .is-laud, .func .is-coordinate{
    background-color: #2196F3;
}
.func .is-laud:hover, .func .is-laud:focus,
.func .is-coordinate:hover, .func .is-coordinate:focus
{
    border-color: #48494a;
    background-color: #2196F3;
}

/* ------------弹出界面-------------====================== */

.view-mode{
    position: absolute;
    top: 40%;
    left: 30%;
    width: 40%;
    height: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.view-mode p{
    /* width: 50%;
    max-width: 400px; */
    width: 402px;
    height: 28px;
    margin: 0;
    padding: .8rem 0;
    background: #000000a1;
    /* font-size: 1.3rem; */
    font-size: 22px;
    border: 1px solid #000000a1;
    border-radius: 20px 20px 0 0;
    border-bottom-color: #848383;
}
.view-choice{
    /* width: 50%;
    max-width: 400px; */
    width: 402px;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #000000a1;
    border: 1px solid #000000a1;
    border-radius: 0 0 20px 20px;
}
.view-select{
    /* width: 8vw; */
    width: 80px;
    height: 70%;
    /* min-width: 40px;
    max-width: 80px;
    max-height: 90px; */
    margin: 1rem 0;
    /* font-size: 1.3rem; */
    font-size: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
}
.view-img{
    
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    width: 40%;
    height: 40%;
    min-height: 40px;
}
.view-img span{
    margin-bottom: 10px;
}
.normal{
    background-image: url(../assets/icon/normal.png);
}
.planet{
    background-image: url(../assets/icon/planet.png);
}
.fisheye{
    background-image: url(../assets/icon/fisheye.png);
}
.crystal-ball{
    background-image: url(../assets/icon/crystal-ball.png);
}
 /* 13、ios和android下触摸元素时出现半透明灰色遮罩
Element {
  -webkit-tap-highlight-color:rgba(255,255,255,0)
} */
</style>

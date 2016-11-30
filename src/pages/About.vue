<template>
    <section class="about">
        <section class="as as-1">
            <div class="gap black"></div>
            <div class="inner">
                <div class="image pc-pad">
                    <img src="/static/assets/about-members.png"/>
                </div>
                <div class="image mobile">
                    <img src="/static/assets/about-members-m.png" width="100%"/>
                </div>
                <div class="content">
                    <div class="description">
                        <p>
                            We’re the Entertech team,
                            and we focus on developing high-tech wearables for health,
                            leading the way with dry EEG acquisition and ECG acquisition technology.
                            We’ve been a member of Apple’s MFi developers program (Made for iPhone) since 2015.
                        </p>
                        <p>
                            Our R & D team consists of bioelectric data collection specialists from Zhejiang University,
                            Hangzhou Dianzi University, University of York, and others.
                            We cooperate closely with the Zhejiang Tongde Hospital and the College of Biomedical Engineering & Instrument Science at Zhejiang University.
                        </p>
                        <p>
                            The company obtained millions of investments from angel investors in just four months after set up;
                            a year later, in July 2015, once again won millions of additional investments from angel investors;
                            in January 2016, achieved ten million Pre-A round of investment from Zhongguancun Development Center, a well-known investment institution.
                        </p>
                        <p class="text-highlight">
                            We believe that sleep and relaxation (and their related health benefits like disease prevention) are important causes,
                            and we plan to develop even more technologies for accurate health data monitoring after we bring Naptime to market.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="as as-2">
            <div class="inner">
                <div class="image pc-pad">
                    <img src="/static/assets/about-founders.png" />
                </div>
                <div class="flag mobile pull-right">
                    <img src="/static/assets/about-founders-flag-m.png" width="196"/>
                </div>
                <div class="image mobile">
                    <img src="/static/assets/about-founders-m.png" width="261"/>
                </div>
            </div>
        </section>
        <section class="as as-3">
            <div class="inner">
                <div class="content">
                    <div class="title">
                        Contact Us
                    </div>
                    <div class="detail">
                        <p>
                            Company: <span class="text-highlight">Hangzhou Enter Electronic Technology Co., Ltd.</span>
                        </p>
                        <p>
                            Address: <span class="text-highlight">Room 407, 4th Floor, Yigao Startups, NO. 29, Huanggushan Road, Xihu District, Hanghzhou, Zhejiang Province, China.</span>
                        </p>
                        <p>
                            Contact Number: <span class="text-highlight">400-600-9870</span>
                        </p>
                        <p>
                            Email: <span class="text-highlight">business@entertech.cn</span>
                        </p>
                    </div>
                </div>
                <div class="flag">
                    <img src="/static/assets/about-flag.png"/>
                </div>
            </div>
        </section>
        <NapFooter></NapFooter>
    </section>
</template>

<script>
import NapFooter from '../components/Footer.vue'
export default {
    components: { NapFooter }
}
</script>

<style lang="less">
@import "../common/less/color.less";
@import "../common/less/layout.less";

.about {
    .as {
        height: 800px;
    }
    .inner {
        .relative;
        max-width: 1200px;
        margin: 0 auto;
    }
    .as-1 {
        background-image: url(/static/assets/about-bg-1.png);
        background-repeat: no-repeat;
        background-size: cover;
        .content {
            color: @color-text-white;
            font-size: 16px;
            text-align: left;
            margin-top: 180px;
            padding-left: 600px;
            line-height: 24px;
        }
        .image {
            .absolute;
            left: 0;
            top: 0px;
        }
    }
    .as-2 {
        background-image: url(/static/assets/about-bg-2.png);
        background-repeat: no-repeat;
        background-size: cover;
        .image {
            img {
                max-width: 100%;
            }
        }
    }
    .as-3 {
        height: 300px;
        text-align: left;
        color: @color-text-white;

        .content {
            padding: 40px 100px;
        }
        .title {
            font-size: 32px;
        }
        .detail {
            font-size: 16px;
        }
        .flag {
            .absolute;
            left: 0;
            top: 0;
        }
    }
}


// 显示器
@media only screen and (min-width: @screen-desktop) {

}

// 笔记本
@media only screen and (min-width: @screen-pad) and (max-width: @screen-desktop) {

}

// 平板
@media only screen and (min-width: @screen-mobile) and (max-width: @screen-pad) {

}

// 手机
@media only screen and (max-width: @screen-mobile) {
    .about {
        .as-1 {
            height: auto;
            .image {
                position: static;
                margin-top: 100px;
            }
            .content {
                margin-top: 100px;
                padding: 0 20px;
                font-size: 12px;
                line-height: 1.4;
            }
        }
        .as-2 {
            background: none;
            height: auto;
            padding: 20px 0;
            .image {
                margin-top: 40px;
                padding: 20px;
            }
        }
        .as-3 {
            background: white;
            .content {
                padding: 20px 0;
                padding-left: 30px;
                padding-right: 10px;
            }
            .title {
                color: @color-text-dark;
                font-size: 20px;
            }
            .detail {
                font-size: 12px;
                color: @color-text-dark;
                line-height: 1.6;
                .text-highlight {
                    color: #777;
                }
            }
            .flag {
                left: 10px;
                img {
                    width: 20px;
                }
            }
        }
    }
}
</style>

<template>
    <section class="product">
        <section class="ps ps-1 black">
            <div class="inner">
                <div class="gap black"></div>
                <div class="image">
                    <img src="/static/assets/product-1-show.png" width="600"/>
                </div>
                <div class="content">
                    <div class="title f-title">
                        The best power nap in the world,<br/>
                        <span class="text-highlight">anytime, anywhere.</span>
                    </div>
                    <div class="description f-desc">
                        Nap better in the train, airport, or office.<br/>
                        The Naptime memory foam eyeshade blocks out light and lulls you to sleep for a high-quality power nap wherever you are (<span class="text-highlight">no battery needed</span>).
                    </div>
                    <div class="sign f-sign pc">
                        <span class="text-highlight">ENTERTECH.</span>
                    </div>
                </div>
            </div>
        </section>
        <section class="ps ps-2">
            <div class="inner">
                <div class="gap white"></div>
                <div class="image">
                    <img src="/static/assets/product-2-image-1.png" width="400"/>
                </div>
                <div class="content">
                    <div class="title f-title">
                        Time your naps perfectly to wake up <span class="text-highlight">refreshed</span>.
                    </div>
                    <div class="description f-desc">
                        Naptime helps you time your naps perfectly. It uses <span class="text-highlight">EEG</span> readings of your brain activity to wake you up during your light sleep phase instead of deep sleep,
                        so that you feel awake and ready to tackle the rest of the dat.
                    </div>
                    <div class="sign f-sign pc">
                        <span class="text-highlight">ENTERTECH.</span>
                    </div>
                </div>
            <div class="inner">
        </section>
        <section class="ps ps-3">
            <div class="inner">
                <div class="gap black"></div>
                <div class="image">
                    <img src="/static/assets/product-3-show.png" width="640"/>
                </div>
                <div class="content">
                    <div class="title f-title">
                        Your personal sleep <span class="text-highlight">DJ</span>.
                    </div>
                    <div class="description f-desc">
                        The intelligent music library will evolve over time as the app discovers which audio works best.
                        You can also add your own favorite songs to the mix.
                        Whatever you listen to, it’ll be hi-fi,
                        lossless digital audio quality,
                        thanks to the special headphones that connect to your devices with Apple Lightning/USB Type C connector technology.
                    </div>
                    <div class="sign f-sign pc">
                        <span class="text-highlight">ENTERTECH.</span>
                    </div>
                </div>
            </div>
        </section>
        <section class="ps ps-4">
            <div class="inner">
                <div class="gap white"></div>
                <div class="image">
                    <img src="/static/assets/product-4-image-1.png" width="400"/>
                </div>
                <div class="content">
                    <div class="title f-title">
                        Comfy <span class="text-highlight">memory foam eyeshade</span>
                    </div>
                    <div class="description f-desc">
                        <p>
                            Naptime is made of memory foam with billions of temperature-sensitive particles,
                            fitting the contours of your face with a 3D design that leaves space for your eyes so you don’t feel any pressure.
                            The eye mask’s interior is lined with breathable fabric,
                            and its premium leather exterior comes in multiple color options.
                        </p>
                        <p>
                            Naptime uses “dry” EEG electrodes,
                            which are safe and easy to use.
                            They’re more comfortable than the older “wet” electrode sensors -- the way they’re designed,
                            you won’t even feel them when you’re wearing the eyeshade.
                            If you like, you can remove the EEG reader from the eye mask at any time.
                        </p>
                    </div>
                    <div class="sign f-sign pc">
                        <span class="text-highlight">ENTERTECH.</span>
                    </div>
                </div>
            </div>
        </section>
        <section class="ps ps-5">
            <div class="inner">
                <div class="gap black"></div>
                <div class="image">
                    <div class="title f-title pc-pad">
                        Naptime <span class="text-highlight">app</span>
                    </div>
                    <img src="/static/assets/product-5-show.gif"/>
                </div>
                <div class="content">
                    <div class="title f-title mobile">
                        Naptime <span class="text-highlight">app</span>
                    </div>
                    <div class="description f-desc">
                        <span style="font-size: 16px;">The Naptime app uses your <span class="text-highlight">EEG</span> data to:</span>
                        <br/><br/><br/>
                        <ul>
                            <li>
                                Play songs that relax you and lull you to sleep (Sleep DJ)
                            </li>
                            <li>
                                Start white noise when you fall asleep
                            </li>
                            <li>
                                Pick the best point in your sleep cycle to wake you up refreshed
                            </li>
                            <li>
                                Calculate your Nap Score: sleep quality based on brainwave frequency
                            </li>
                            <li>
                                Track how long you sleep, how long it takes you to fall asleep, and sleep cycle curves
                            </li>
                            <li>
                                Give you personalized tips to improve your sleep quality
                            </li>
                        </ul>
                    </div>
                    <div class="sign f-sign pc">
                        <span class="text-highlight">ENTERTECH.</span>
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>

<style lang="less">
@import "../common/less/color.less";
@import "../common/less/layout.less";

.product {
    .ps {
        height: 800px;
        .inner {
            max-width: 1400px;
            height: 100%;
            margin: 0 auto;
            .relative;
        }
        .title {
            padding: 40px 0;
        }
        .description {
            line-height: 24px;
            margin: 40px 0;
        }
    }
    .ps-1 {
        background-image: url(/static/assets/product-1-bg.png);
        background-repeat: no-repeat;
        background-size: cover;
        .content {
            margin: 200px 100px;
            padding-right: 520px;
            padding-top: 50px;
            text-align: left;
            color: @color-text-white;
        }
        .title {
            padding: 40px 0;
        }
        .description {
            line-height: 24px;
            margin: 40px 0;
        }
        .image {
            .absolute;
            right: 0;
            top: 50%;
            margin-top: -240px;
        }
    }
    .ps-2 {
        background-image: url(/static/assets/product-2-bg.png);
        background-repeat: no-repeat;
        background-size: cover;
        .content {
            margin: 160px 100px;
            padding-right: 550px;
            padding-top: 50px;
            text-align: left;
            color: @color-text-dark;
        }
        .image {
            .absolute;
            right: 120px;
            top: 50%;
            margin-top: -240px;
        }
    }
    .ps-3 {
        background-image: url(/static/assets/product-3-bg.png);
        background-repeat: no-repeat;
        background-size: cover;
        .content {
            margin: 160px 100px;
            padding-right: 550px;
            padding-top: 50px;
            text-align: left;
            color: @color-text-white;
        }
        .title {
            margin-left: 40px;
        }
        .image {
            .absolute;
            right: 0;
            top: 50%;
            margin-top: -160px;
        }
    }
    .ps-4 {
        background-image: url(/static/assets/product-4-bg.png);
        background-repeat: no-repeat;
        background-size: cover;
        .content {
            margin: 130px 100px;
            padding-right: 500px;
            padding-top: 50px;
            text-align: left;
            color: @color-text-dark;
        }
        .image {
            .absolute;
            right: 120px;
            top: 50%;
            margin-top: -220px;
        }
    }
    .ps-5 {
        background-image: url(/static/assets/product-5-bg.png);
        background-repeat: no-repeat;
        background-size: cover;
        .content {
            margin: 130px 100px;
            padding-left: 500px;
            padding-top: 120px;
            text-align: left;
            color: @color-text-white;
        }
        .title {
            color: @color-text-white;
            text-align: left;
        }
        .image {
            .absolute;
            left: 120px;
            top: 50%;
            margin-top: -220px;
        }
        ul {
            margin-left: -30px;
        }
        li {
            list-style: square;
            list-style-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB1WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOkNvbXByZXNzaW9uPjE8L3RpZmY6Q29tcHJlc3Npb24+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb24+MjwvdGlmZjpQaG90b21ldHJpY0ludGVycHJldGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KAtiABQAAABdJREFUCB1jfHxH6j8DFsCERQwsRA8JAKfUAuRX6uesAAAAAElFTkSuQmCC");
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
    .product {
        .ps {
            height: 600px;
            .description {
                line-height: 1.2;
            }
        }
        .ps-1 {
            height: 700px;
            .image {
                position: static;
                margin-top: 100px;
                img {
                    width: 100%;
                    max-width: 480px;
                }
            }
            .content {
                margin: 20px 0;
                padding: 0 20px;
            }
            .title {
                padding: 0;
            }
        }
        .ps-2 {
            background: none;
            .image {
                position: static;
                margin-top: 0;
                img {
                    width: 200px;
                }
            }
            .content {
                margin: 10px 0;
                padding: 20px;
                color: @color-text-white;
            }
            .title {
                padding: 0;
            }
        }
        .ps-3 {
            background: none;
            .image {
                position: static;
                margin-top: 0;
                img {
                    width: 100%;
                    max-width: 480px;
                }
            }
            .content {
                margin: 10px 0;
                padding: 20px;
                color: @color-text-white;
            }
            .title {
                padding: 0;
                margin-left: 0;
            }
        }
        .ps-4 {
            background: none;
            .image {
                position: static;
                margin-top: 0;
                img {
                    width: 200px;
                }
            }
            .content {
                margin: 10px 0;
                padding: 20px;
                color: @color-text-white;
            }
            .title {
                padding: 0;
                margin-left: 0;
            }
        }
        .ps-5 {
            background: none;
            .image {
                position: static;
                margin-top: 0;
                img {
                    width: 300px;
                }
            }
            .content {
                margin: 10px 0;
                padding: 20px;
                color: @color-text-white;
            }
            .title {
                padding: 0;
                margin-left: 0;
            }
        }
    }
}
</style>

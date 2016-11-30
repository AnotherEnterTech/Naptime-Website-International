<template>
    <section class="tip">
        <div class="tip1">
            <p style="color: #5483ff;">
                App is being installed. Hold down the Home button to view.
            </p>
            <p>
                Our app is still in the procedure of Apple official review,
                temporarily unavailable on App Store.
                In order to run enterprise edition on you iPhone,
                <b>we need to trust the enterprise developer.</b>
            </p>
			<img src="/static/assets/capture/tip-1.png" alt="信任开发者账号" width="200">
			<p>
                After installation,
                tap the application.
                There appears “Untrusted Enterprise Developer” pop-up window,
                and then we need to trust the developer.
            </p>
		</div>
		<div class="tip2">
			<img src="/static/assets/capture/tip-2.png" alt="信任开发者账号" width="200">
			<p class="center">Tap “Settings” - General</p>
		</div>
		<div class="tip3">
			<img src="/static/assets/capture/tip-3.png" alt="信任开发者账号" width="200">
			<p>Find “Device Management” and tap “Hangzhou Enter Electronic Technol…”</p>
		</div>
		<div class="tip4">
			<img src="/static/assets/capture/tip-4.png" alt="信任开发者账号" width="200">
			<p>
                Tap “Trust ‘Hangzhou Enter Electronic Technol…‘” and appears a pop-up window.
                Tap “Trust”. Go back to the desktop and open the application again.
            </p>
		</div>
    </section>
</template>


<style lang="less">
@import "../common/less/color.less";
@import "../common/less/layout.less";
    nav {
        .black;
    }
    .tip {
        background: white;
        padding-top: 80px;
        padding-bottom: 40px;
        &.page {
            height: auto !important;
        }
        p {
            padding: 0 20px;
            line-height: 1.6;
            text-align: left;
        }
        .center {
            text-align: center;
        }
    }
</style>

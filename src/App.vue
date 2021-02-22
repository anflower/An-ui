<template>
	<div id="app">
		<div style="margin-top: 30px; margin-left: 30px;">
			<h1>An-button</h1>
			<div class="row ">
				<An-button @click="handle">默认按钮</An-button>
				<An-button type="primary">主要按钮</An-button>
				<An-button type="success">成功按钮</An-button>
				<An-button type="info">信息按钮</An-button>
				<An-button type="warning">警告按钮</An-button>
				<An-button type="danger">危险按钮</An-button>
			</div>
			<div class="row">
				<An-button plain>默认按钮</An-button>
				<An-button plain type="primary">主要按钮</An-button>
				<An-button plain type="success">成功按钮</An-button>
				<An-button plain type="info">信息按钮</An-button>
				<An-button plain type="warning">警告按钮</An-button>
				<An-button plain type="danger">危险按钮</An-button>
			</div>
			<div class="row">
				<An-button round>默认按钮</An-button>
				<An-button round type="primary">主要按钮</An-button>
				<An-button round type="success">成功按钮</An-button>
				<An-button round type="info">信息按钮</An-button>
				<An-button round type="warning">警告按钮</An-button>
				<An-button round type="danger">危险按钮</An-button>
			</div>
			<div class="row">
				<An-button circle>默</An-button>
				<An-button circle type="primary">主</An-button>
				<An-button circle type="success">成</An-button>
				<An-button circle type="info">信</An-button>
				<An-button circle type="warning">警</An-button>
				<An-button circle type="danger">危</An-button>
			</div>
			<h1>禁用按钮</h1>
			<div class="row">
				<An-button disabled @click="handle">默认按钮</An-button>
				<An-button disabled type="primary">主要按钮</An-button>
				<An-button disabled type="success">成功按钮</An-button>
				<An-button disabled type="info">信息按钮</An-button>
				<An-button disabled type="warning">警告按钮</An-button>
				<An-button disabled type="danger">危险按钮</An-button>
				<div class="row">
					<An-button plain disabled>默认按钮</An-button>
					<An-button plain disabled type="primary"
						>主要按钮</An-button
					>
					<An-button plain disabled type="success"
						>成功按钮</An-button
					>
					<An-button plain disabled type="info">信息按钮</An-button>
					<An-button plain disabled type="warning"
						>警告按钮</An-button
					>
					<An-button plain disabled type="danger">危险按钮</An-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		handle() {
			console.log('点击');
		},
	},
};
</script>

<style lang="scss">
h1 {
	width: 100%;
	text-align: center;
	margin: 30px auto;
	font-weight: 300;
}
* {
	padding: 0px;
	margin: 0px;
}
html,
body {
	width: 100%;
	height: 100%;
	#app {
		width: 100%;
		height: 100%;
		// background: #333;
		.row {
			width: 750px;
			margin: 0 auto;
			margin-top: 30px;
		}
		.An-button {
			margin-left: 20px;
		}
	}
}
</style>

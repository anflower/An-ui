<template>
	<button
		class="An-button"
		:class="[
			`An-button--${type}`,
			{
				'is-plain': plain,
				'is-round': round,
				'is-circle': circle,
				'is-disabled': disabled,
			},
		]"
		:disabled="disabled"
		@click="handleClick"
	>
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: 'AnButton',
	props: {
		type: {
			type: String,
			default: 'defauit',
		},
		plain: {
			type: Boolean,
			default: false,
		},
		round: {
			type: Boolean,
			default: false,
		},
		circle: {
			type: Boolean,
			default: false,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
	},
	methods: {
		handleClick(e) {
			this.$emit('click', e);
		},
	},
};
</script>

<style lang="scss">
.An-button {
	display: inline-block;
	line-height: 1;
	white-space: nowrap;
	cursor: pointer;
	background: #fff;
	border: 1px solid #dcdfe6;
	color: #606266;
	-webkit-appearance: none;
	text-align: center;
	box-sizing: border-box;
	outline: none;
	margin: 0;
	transition: 0.1s;
	font-weight: 500;
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	padding: 12px 20px;
	font-size: 14px;
	border-radius: 4px;
	transition: all 0.4s;
}

.An-button--primary {
	background: #409eff;
	border: 1px solid #409eff;
	color: #fff;
	border-radius: 4px;
	&:hover {
		transition: all 0.4s;
		background: #66b1ff;
		border-color: #66b1ff;
	}
}
.An-button--success {
	background: #67c23a;
	border: 1px solid #67c23a;
	color: #fff;
	border-radius: 4px;
	&:hover {
		transition: all 0.4s;
		background: #85ce61;
		border-color: #85ce61;
	}
}
.An-button--info {
	background: #909399;
	border: 1px solid #909399;
	color: #fff;
	border-radius: 4px;
	&:hover {
		transition: all 0.4s;
		background: #a6a9ad;
		border-color: #a6a9ad;
	}
}
.An-button--warning {
	background: #e6a23c;
	border: 1px solid #e6a23c;
	color: #fff;
	border-radius: 4px;
	&:hover {
		transition: all 0.4s;
		background: #ebb563;
		border-color: #ebb563;
	}
}
.An-button--danger {
	background: #f56c6c;
	border: 1px solid #f56c6c;
	color: #fff;
	border-radius: 4px;
	&:hover {
		transition: all 0.4s;
		background: #f78989;
		border-color: #f78989;
	}
}
.An-button--primary.is-plain {
	color: #409eff;
	background: #ecf5ff;
	border-color: #b3d8ff;
	&:hover {
		transition: all 0.4s;
		background: #409eff;
		border-color: #409eff;
		color: #fff;
	}
}
.An-button--success.is-plain {
	color: #67c23a;
	background: #f0f9eb;
	border-color: #c2e7b0;
	&:hover {
		transition: all 0.4s;
		background: #67c23a;
		border-color: #67c23a;
		color: #fff;
	}
}
.An-button--info.is-plain {
	color: #909399;
	background: #f4f4f5;
	border-color: #d3d4d6;
	&:hover {
		transition: all 0.4s;
		background: #909399;
		border-color: #909399;
		color: #fff;
	}
}
.An-button--warning.is-plain {
	color: #e6a23c;
	background: #fdf6ec;
	border-color: #f5dab1;
	&:hover {
		transition: all 0.4s;
		background: #e6a23c;
		border-color: #e6a23c;
		color: #fff;
	}
}
.An-button--danger.is-plain {
	color: #f56c6c;
	background: #fef0f0;
	border-color: #fbc4c4;
	&:hover {
		transition: all 0.4s;
		background: #f56c6c;
		border-color: #f56c6c;
		color: #fff;
	}
}
.An-button.is-round {
	border-radius: 20px;
	padding: 12px 23px;
}
.An-button.is-circle {
	border-radius: 50%;
	padding: 12px;
}
.An-button.is-disabled {
	color: #c0c4cc;
	cursor: not-allowed;
	background-image: none;
	background-color: #fff;
	border-color: #ebeef5;
}
.An-button--primary.is-disabled {
	color: #fff;
	background-color: #a0cfff;
	border-color: #a0cfff;
}
.An-button--success.is-disabled {
	color: #fff;
	background-color: #b3e19d;
	border-color: #b3e19d;
}
.An-button--info.is-disabled {
	color: #fff;
	background-color: #c8c9cc;
	border-color: #c8c9cc;
}
.An-button--warning.is-disabled {
	color: #fff;
	background-color: #f3d19e;
	border-color: #f3d19e;
}
.An-button--danger.is-disabled {
	color: #fff;
	background-color: #fab6b6;
	border-color: #fab6b6;
}
.An-button--primary.is-plain.is-disabled {
	color: #8cc5ff;
	background-color: #ecf5ff;
	border-color: #d9ecff;
}
.An-button--success.is-plain.is-disabled {
	color: #a4da89;
	background-color: #f0f9eb;
	border-color: #e1f3d8;
}
.An-button--info.is-plain.is-disabled {
	color: #bcbec2;
	background-color: #f4f4f5;
	border-color: #e9e9eb;
}
.An-button--warning.is-plain.is-disabled {
	color: #f0c78a;
	background-color: #fdf6ec;
	border-color: #faecd8;
}
.An-button--danger.is-plain.is-disabled {
	color: #f9a7a7;
	background-color: #fef0f0;
	border-color: #fde2e2;
}
</style>

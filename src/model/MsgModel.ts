class MsgModel<T> {
	public static CODE: number = 200
	public static FAIL: number = 1

	public code: number | undefined = 200
	public errorCode?: number | undefined = 0
	public message?: string = ''
	public data?: T | null | undefined = null

	public get success(): boolean {
		return this.code === MsgModel.CODE
	}

	constructor(status: number, message: string)
	constructor(status: number, message: string, data: T)
	constructor(code?: number, message?: string, data?: T) {
		this.code = code
		this.message = message || ''
		this.data = data || null
	}

	public static fail(message: string): MsgModel<null>
	public static fail(message: string, data: any): MsgModel<any>
	public static fail(message: string, data?: any): MsgModel<any> {
		return new MsgModel(MsgModel.FAIL, message, data)
	}

	public static isSuccess(msgModel: any): boolean {
		return Boolean(msgModel?.code == MsgModel.CODE || msgModel?.success)
	}

	public static isFail(msgModel: any): boolean {
		return !MsgModel.isSuccess(msgModel)
	}

}

export default MsgModel
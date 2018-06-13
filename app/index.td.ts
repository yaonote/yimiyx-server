import TestController from './controller/test';
import HomeController from './controller/home';
import SupplierController from './controller/supplier';
import SupplierService from './service/supplier';
import GoodsCategoryController from './controller/goods-category';
import GoodsCategoryService from './service/goods-category';
import GoodsController from './controller/goods';
import GoodsService from './service/goods';
import PurchaseOrderController from './controller/purchase-order';
import PurchaseOrderService from './service/purchase-order';

declare module 'egg' {
  export interface Application {
    connection: any
  }

  export interface IController {
    test: TestController,
    home: HomeController,
    supplier: SupplierController,
    goodsCategory: GoodsCategoryController,
    goods: GoodsController,
    purchaseOrder: PurchaseOrderController
  }

  export interface IService {
    supplier: SupplierService,
    goodsCategory: GoodsCategoryService,
    goods: GoodsService,
    purchaseOrder: PurchaseOrderService
  }

  export interface IHelper {
    /**
     * @method Helper#toCamelObj - 将对象或者数组内对象的key转为小驼峰命名
     * @param {Object | Array} obj - 要进行转换的对象或者数组
     */
    toCamelObj(obj: Object | Object[]),

    /**
     * @method Helper#toSnakeObj - 将对象或者数组内对象的key转为下划线分割命名
     * @param {Object | Array} obj - 要进行转换的对象或者数组
     */
    toSnakeObj(obj: Object | Object[]),

    /**
     * @method Helper#prefixZero - 对指定数值进行前置补 '0'
     * @param {Number} num - 要进行处理的原始数字
     * @param {Number} len - 转换后的总长度
     * @example
     * ```js
     * ctx.helper.prefixZero(1, 4)
     * => '0001'
     * ```
     * @return {String}
     */
    prefixZero(num: number, len: number): string,

    /**
     * @method Helper#uuid - 生成随机ID
     * @param {Number} len - 生成长度
     * @param {Number} radix - 基于几进制生成
     */
    uuid(len: number, radix: number): string
  }

  function startCluster(options: any)
}
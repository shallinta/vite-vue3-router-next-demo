import fetch from 'ajax-fetch-esm';
import { object2query } from '../utils/query-parser';
import delay from '../utils/delay';
import { Page } from '../models/page.model';

let instance: ProductsService = null;

const mockData = {
  'iphone 11 pro': {
    name: 'iphone 11 pro',
    result: 'bad',
    comments: JSON.stringify({
      purchasedFromChina: 'good',
      purchasedFromAmerica: 'bad',
      purchasedFromFrance: 'bad',
    }),
    startTime: 1590519601815,
    stopTime: 1590519609676,
  },
  'huawei p40 pro': {
    name: 'huawei p40 pro',
    result: 'good',
    comments: JSON.stringify({
      helloWorld: 'good',
    }),
    startTime: 1590576158453,
    stopTime: 1590576158488,
  },
  'mi 10 pro': {
    name: 'mi 10 pro',
    result: 'bad',
    comments: JSON.stringify({
      testedByZhangquandan: 'bad'
    }),
    startTime: 1590519602284,
    stopTime: 1590519702754,
  },
  'samsung galaxy Z flip': {
    name: 'samsung galaxy Z flip',
    result: 'bad',
    comments: JSON.stringify({
      commentFromJapanese: 'bad',
      commentFromKorean: 'bad',
    }),
    startTime: 1590575557856,
    stopTime: 1590585562325,
  }
}

class ProductsService {
  private baseUrl = '/products/api';

  public getList(params): Promise<Page<any>> {
    const query = object2query(params);
    return fetch.get(`${this.baseUrl}/productions?${query}`).then(() => {}, () => {}).then(() => delay(1000)).then(() => ({
      pageInfo: {
        totalItem: 233,
        pageSize: 20,
        currentPage: 0,
        totalPage: 59,
      },
      list: [
        {
          name: 'iphone 11 pro',
          description: 'Apple iPhone 11 Pro (A2217) 256GB 暗夜绿色 移动联通电信4G手机 双卡双待',
          offcial: true,
        }, {
          name: 'huawei p40 pro',
          description: '华为 HUAWEI P40 Pro 麒麟990 5G SoC芯片 5000万超感知徕卡四摄 50倍数字变焦 8GB+256GB零度白全网通5G手机',
          offcial: false,
        }, {
          name: 'mi 10 pro',
          description: '小米10 Pro 双模5G 骁龙865 1亿像素8K电影相机 50倍变焦 50W快充 8GB+256GB 星空蓝 拍照智能游戏手机',
          offcial: false,
        }, {
          name: 'samsung galaxy Z flip',
          description: '三星 Galaxy Z Flip（SM-F7000） 超感官灵动折叠屏 8GB+256GB 潘多拉紫',
          offcial: true,
        },
        {
          name: 'iphone 11 pro',
          description: 'Apple iPhone 11 Pro (A2217) 256GB 暗夜绿色 移动联通电信4G手机 双卡双待',
          offcial: true,
        }, {
          name: 'huawei p40 pro',
          description: '华为 HUAWEI P40 Pro 麒麟990 5G SoC芯片 5000万超感知徕卡四摄 50倍数字变焦 8GB+256GB零度白全网通5G手机',
          offcial: false,
        }, {
          name: 'mi 10 pro',
          description: '小米10 Pro 双模5G 骁龙865 1亿像素8K电影相机 50倍变焦 50W快充 8GB+256GB 星空蓝 拍照智能游戏手机',
          offcial: false,
        }, {
          name: 'samsung galaxy Z flip',
          description: '三星 Galaxy Z Flip（SM-F7000） 超感官灵动折叠屏 8GB+256GB 潘多拉紫',
          offcial: true,
        },
        {
          name: 'iphone 11 pro',
          description: 'Apple iPhone 11 Pro (A2217) 256GB 暗夜绿色 移动联通电信4G手机 双卡双待',
          offcial: true,
        }, {
          name: 'huawei p40 pro',
          description: '华为 HUAWEI P40 Pro 麒麟990 5G SoC芯片 5000万超感知徕卡四摄 50倍数字变焦 8GB+256GB零度白全网通5G手机',
          offcial: false,
        }, {
          name: 'mi 10 pro',
          description: '小米10 Pro 双模5G 骁龙865 1亿像素8K电影相机 50倍变焦 50W快充 8GB+256GB 星空蓝 拍照智能游戏手机',
          offcial: false,
        }, {
          name: 'samsung galaxy Z flip',
          description: '三星 Galaxy Z Flip（SM-F7000） 超感官灵动折叠屏 8GB+256GB 潘多拉紫',
          offcial: true,
        },
        {
          name: 'iphone 11 pro',
          description: 'Apple iPhone 11 Pro (A2217) 256GB 暗夜绿色 移动联通电信4G手机 双卡双待',
          offcial: true,
        }, {
          name: 'huawei p40 pro',
          description: '华为 HUAWEI P40 Pro 麒麟990 5G SoC芯片 5000万超感知徕卡四摄 50倍数字变焦 8GB+256GB零度白全网通5G手机',
          offcial: false,
        }, {
          name: 'mi 10 pro',
          description: '小米10 Pro 双模5G 骁龙865 1亿像素8K电影相机 50倍变焦 50W快充 8GB+256GB 星空蓝 拍照智能游戏手机',
          offcial: false,
        }, {
          name: 'samsung galaxy Z flip',
          description: '三星 Galaxy Z Flip（SM-F7000） 超感官灵动折叠屏 8GB+256GB 潘多拉紫',
          offcial: true,
        },
        {
          name: 'iphone 11 pro',
          description: 'Apple iPhone 11 Pro (A2217) 256GB 暗夜绿色 移动联通电信4G手机 双卡双待',
          offcial: true,
        }, {
          name: 'huawei p40 pro',
          description: '华为 HUAWEI P40 Pro 麒麟990 5G SoC芯片 5000万超感知徕卡四摄 50倍数字变焦 8GB+256GB零度白全网通5G手机',
          offcial: false,
        }, {
          name: 'mi 10 pro',
          description: '小米10 Pro 双模5G 骁龙865 1亿像素8K电影相机 50倍变焦 50W快充 8GB+256GB 星空蓝 拍照智能游戏手机',
          offcial: false,
        }, {
          name: 'samsung galaxy Z flip',
          description: '三星 Galaxy Z Flip（SM-F7000） 超感官灵动折叠屏 8GB+256GB 潘多拉紫',
          offcial: true,
        },
      ],
    } as Page<any>));
  }

  public getDetail(params): Promise<any> {
    const { name, ...restParams } = params;
    const query = object2query(restParams);
    return fetch.get(`${this.baseUrl}/productions/${name}?${query}`).then(() => {}, () => {}).then(() => delay(3000)).then(() => mockData[name]);
  }

  public updateAll(): Promise<void> {
    return fetch.post(`${this.baseUrl}/update/all`, null, {
      headers: {
        'content-type': 'plain/text'
      }
    }).then(() => {}, () => {}).then(() => delay(2000));
  }

  public update(name: string): Promise<number> {
    return fetch.post(`${this.baseUrl}/update/${name}`).then(() => {}, () => {}).then(() => delay(2000));
  }
}

if (!instance) {
  instance = new ProductsService();
}

export default instance;
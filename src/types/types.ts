export interface IProduct {
  id: number,
  name: string,
  image: {
    url: string,
    small?: {
      url: string,
    }
  },
  measure_unit: string,
  volume: number,
  quantity_in_package?: number,
  barcode: number,
  manufacturer: string,
  brand: string,
  description: string,
  price: number,
  care_category: string | string[],
  is_available: boolean
}

export class MenuItem {
  name: string;
  price: number;
  icon: string;
  count: number;
  color: string;

  constructor(name?: string, price?: number, icon?: string, count?: number, color?: string) {
    this.name = name ?? '';
    this.price = price ?? 0;
    this.icon = icon ?? '';
    this.count = count ?? 0;
    this.color = color ?? '';
  }

  addCount(n: number) {
    this.count += n;
  }
}

export class Table {
  id: string;
  name: string;
  area: string;
  icon: string;
  bill: Bill;
  color: string;
  isAvaiable: boolean;

  constructor(id?: string, name?: string, area?: string, icon?: string, bill?: Bill, color?: string, isAvaiable?: boolean) {
    this.id = id ?? '';
    this.name = name ?? '';
    this.area = area ?? '';
    this.icon = icon ?? '';
    this.bill = bill ?? new Bill();
    this.color = color ?? '';
    this.isAvaiable = isAvaiable ?? true;
  }
}

export class Bill {
  id: string;
  listArray: ItemServing[];
  subTotal: number;
  total: number;
  VAT: number;
  status: number;
  method: number;
  date: Date;
  constructor(id?: string, listArray?: ItemServing[], subTotal?: number, total?: number, VAT?: number, status?: number, method?: number, date?: Date) {
    this.id = id ?? '';
    this.listArray = listArray ?? [];
    this.subTotal = subTotal ?? 0;
    this.total = total ?? 0;
    this.VAT = VAT ?? 0;
    this.status = status ?? 0;
    this.method = method ?? 0;
    this.date = date ?? new Date();
  }
}

export class Area {
  id: string;
  name: string;

  constructor(id?: string, name?: string) {
    this.id = id ?? '';
    this.name = name ?? '';
  }
}

export class ItemServing {
  name: string;
  price: number;
  id: string;
  image: string;
  descrip: string;
  count: number;
  category_id: string;
  category_name: string;
  constructor(id?: string, name?: string, price?: number, image?: string, descrip?: string, count?: number, category_id?: string, category_name?: string) {
    this.id = id ?? '';
    this.name = name ?? '';
    this.price = price ?? 0;
    this.image = image ?? '';
    this.descrip = descrip ?? '';
    this.count = count ?? 0;
    this.category_id = category_id ?? '';
    this.category_name = category_name ?? '';
  }
}

export class Category {
  id: string;
  name: string;
  icon: string;
  count: number;
  color: string;

  constructor(id?: string, name?: string, icon?: string, count?: number, color?: string) {
    this.id = id ?? '';
    this.name = name ?? '';
    this.icon = icon ?? '';
    this.count = count ?? 0;
    this.color = color ?? '';
  }
}

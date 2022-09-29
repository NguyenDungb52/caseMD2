import { time } from "console";
import { DichVu } from "../model/dichvu";
import { PC } from "../model/pc";
let input = require("readline-sync");

export class ManagePC {
  listPC: PC[] = [];
  tien: any = 3000;
  tienan: any = 0;
  listDichVu: DichVu[] = [];
  order: any = [];
  TongDoanThu: any = [];

  constructor() {
    let time: Date = new Date();
    this.listPC.push(new PC("May 1"));
    this.listPC.push(new PC("May 2"));
    this.listPC.push(new PC("May 3"));

    this.listDichVu.push(new DichVu(1, "Bim Bim", 5000, "do an", 100));
  }

  add(t: PC) {
    this.listPC.push(t);
  }
  edit(t: PC) {
    for (let i = 0; i < this.listPC.length; i++) {
      if (this.listPC[i].getName() == t.getName()) {
        let tenMayMoi = input.question("nhap ten may moi");
        this.listPC[i].setName(tenMayMoi)
      }
    }
    console.log(this.listPC);
  }
  remove(t: PC) {
    for (let i = 0; i < this.listPC.length; i++) {
      if (this.listPC[i].getName() == t.getName()) {
        this.listPC.splice(i, 1);
      }
    }
    console.log(this.listPC);
  }

  showall() {
    console.log(this.listPC);
  }
  moMayTinh(t: string) {
    for (let i = 0; i < this.listPC.length; i++) {
      if (this.listPC[i].getName() == t) {
        this.listPC[i].setStatus(true);
        console.log("mo may thanh cong");
      }
    }
  }
  tatMayTinh(t: string) {
    for (let i = 0; i < this.listPC.length; i++) {
      if (this.listPC[i].getName() == t) {
        this.listPC[i].setStatus(false);
        console.log("da tat may tinh");
      }
    }
  }
  editTien(t: number) {
    this.tien = t;
    console.log(this.tien);
  }
  tienAn(t: any) {
    this.tienan = t;
    console.log(this.tienan);
  }
  tinhTienNet() {
    let tiennet: number = 0;
    let tienOrder: number = 0;
    for (let i = 0; i < this.listPC.length; i++) {
      if (this.listPC[i].getStatus() === true) {
        let t: any = new Date();
        let time: any = this.listPC[i].getTime();

        let gioiChoi: any = Math.abs(t - time) / 3600000;
        tiennet = Math.round(gioiChoi * this.tien);
      }
    }
    if (this.order.length > 0) {
      for (let j = 0; j < this.order.length; j++) {
        tienOrder = this.order[j].name.price * this.order[j].quantity;
      }
    }
    let tongTien = tiennet + tienOrder;
    console.log("tien net : ", tiennet, "VND");
    console.log("tien order : ", tienOrder, "VND");
    console.log("tong tien : ", tongTien, "VND");
  }

  addDichVu(t: DichVu) {
    this.listDichVu.push(t);
  }
  removeDichvu(t: number) {
    for (let i = 0; i < this.listDichVu.length; i++) {
      if (this.listDichVu[i].getId() == t) {
        this.listDichVu.splice(i, 1);
      }
    }
    return this.listDichVu;
  }
  addProduct() {
    console.log("--menu--");
    for (let i = 0; i < this.listDichVu.length; i++) {
      console.log(`
        ${i + 1}. ${this.listDichVu[i].getName()}, gia ${this.listDichVu[
        i
      ].getPrice()}  VND
        `);
    }
    let choice = +input.question("nhap lua chon");
    do {
      let quantity = +input.question("nhap so luong can mua");
      let newOder = {
        name: this.listDichVu[choice - 1],
        quantity: quantity,
      };
      this.order.push(newOder);
    } while (choice < 0);
  }
}

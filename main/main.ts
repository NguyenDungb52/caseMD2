import { PC } from './../model/pc';
import { Admin } from "./../model/admin";
import { ManageAdmin } from "../service/manageAdmin";
import { ManagePC } from "../service/managePc";
import { DichVu } from "../model/dichvu";
import { User } from "../model/user";
import { ManageUser } from "../service/manageUser";

let input = require("readline-sync");
let listAdmin: ManageAdmin = new ManageAdmin();
let listPC: ManagePC = new ManagePC();

let listUser: ManageUser = new ManageUser();

function manHinhChinh() {
  let menu = `1. Dang nhap`;

  console.log(menu);
  let choice: number;
  do {
    choice = +input.question("nhap lua chon cua ban :");
    switch (choice) {
      case 1:
        let admin: Admin = dangNhap();
        console.log(admin);
        if (listAdmin.dangNhap(admin) === "admin") {
          menuChinh();
        } else {
          menuNguoiDung();
        }
        break;
    }
  } while (choice);
}
function menuNguoiDung() {
  let menu = `------MENU-------
      1. Do an
      2. Do uong `;
  console.log(menu);
  let choice: number;
  do {
    choice = input.question("nhap lua chon cua ban :");
    switch (choice) {
      case 1:
        doAn();
        break;
      case 2:
        // doUong();
        break;
    }
  } while (choice >= 0);
}

function doAn(){
     
}

function menuChinh() {
  let menu = `--------Menu-------
                    1.Hien thi danh sach may tinh
                    2.Them 1 may vao danh sach 
                    3.Sua doi thong tin may
                    4.Xoa 1 may khoi danh sach
                    5.Them dich vu
                    6.Chinh sua tinh tien theo gio
                    7.Tinh tien
                    8.Quan ly tai khoan dang nhap
                    9.Doanh thu`;
  console.log(menu);
  let choice: number;
  do {
    choice = +input.question("nhap lua chon : ");
    switch (choice) {
      case 1:
        ShowAllPC();
        break;
      case 2:
        addPC();
        break;
      case 3:
        editInforPc();
        break;
      case 4:
        remove();
        break;
      case 5:
        dichvu();
        break;
      case 6:
        chinhSuaTienTheoH();
        break;
      case 7:
        tinhTientheoH();
        nghichoi()
       
        
        break;
      case 8:
        quanLyNgDung();
        break;
    }
  } while (choice != 0);
}
function ShowAllPC() {
  listPC.showall();
        console.log(`1. Chon may can mo
                     0. Thoat` );
            let choice : number
            do {
              choice = +input.question('nhap lua chon cua ban : ')
              switch(choice){
                case 1 :
                  moMayTinh()
                  break
                case 0 :
                  menuChinh()
                  break
              }
            } while (choice>=0);
}
function nghichoi(){
    listPC.showall()
    console.log(`1. Chon may tinh can tat
                 0. Thoat `);
          let choice : number
          do {
            choice = +input.question('Nhap lua chon cua ban : ')
            switch(choice){
              case 1 :  
              tatMayTinh()
              break 
              case 0 :
                menuChinh()
                break
            }
          } while (choice>= 0);    
}
function tatMayTinh(){
    let name = input.question('nhap ten may tinh can tat')
    listPC.tatMayTinh(name)
}
function moMayTinh(){
  let name = input.question('nhap ten may can mo')
        listPC.moMayTinh(name)
}
function addPC() {
  let tenMay = input.question("nhap ten may can them ");
  let mayTinh = new PC(tenMay)
  listPC.add(mayTinh);
}
function editInforPc() {
  let name = input.question("nhap ten may can sua doi thong tin");
  let tenMay = new PC(name)
  listPC.edit(tenMay);
}
function remove() {
  let name = input.question("nhap ten may can xoa : ");
  let tenMay = new PC(name)
  listPC.remove(tenMay);
}

function dangNhap() {
  let taiKhoan = input.question("nhap tai khoan :  ");
  let matKhau = input.question("nhap mat khau ");
  let admin: Admin = new Admin(taiKhoan, matKhau);
  return admin;
}
function dichvu() {
  let menu = `  1. Them dich vu
                2. Xoa dich vu
                0. Thoat`;
  console.log(menu);
  let choice: number;
  do {
    choice = +input.question("nhap lua chon cua ban");
    switch (choice) {
      case 1:
        addDoAn()
        break;
      case 2:
        removeDichVu();
        break;
      case 0:
        menuChinh();
        break;
    }
  } while (choice >= 0);
}


function addDoAn(){
    listPC.addProduct()
}



function removeDichVu() {
  let id = +input.question("nhap id Dich vu can xoa");
  listPC.removeDichvu(id);
}
function quanLyNgDung() {
  let menu =       `1.Them tai khoan nguoi dung
                    2.Sua tai khoan nguoi dung
                    3.Xoa tai khoan nguoi dung
                    4.Hien thi danh sach nguoi dung
                    0.Thoat`;
  console.log(menu);
  let choice: number;
  do {
    choice = +input.question("nhap lua chon");
    switch (choice) {
      case 1:
        addUser();
        break;
      case 2:
        editUser();
        break;
      case 3:
        removeUser();
        break;
      case 4:
        showListUser();
        break;
      case 0:
        menuChinh();
        break;
    }
  } while (choice >= 0);
}
function addUser() {
  let username = input.question("nhap tai khoan");
  let password = input.question("nhap mat khau");
  let account: User = new User(username, password);
  listUser.addUser(account);
}
function editUser() {
  let username = input.question("nhap tai khoan can sua ");
  listUser.editUser(username);
}
function removeUser() {
  let username = input.question("nhap tai khoan can xoa");
  listUser.removeUser(username);
}
function showListUser() {
  console.log(listUser.showUser());
}
function tinhTientheoH() {
  listPC.tinhTienNet();
}
function chinhSuaTienTheoH() {
  let tien = +input.question("nhap so tien sua theo 1  gio ");
  listPC.editTien(tien);
}


function main() {
  manHinhChinh();
}
main();

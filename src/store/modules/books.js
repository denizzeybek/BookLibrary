import request from "@/services/request";

const state = {
  bookList: [],
  userList: [],
  bookSelectObj: {},
  bookId: null,
  address: "",
};

const getters = {
  getBookList(state) {
    return state.bookList;
  },
  getBookSelectObj(state) {
    return state.bookSelectObj;
  },
  getBookId(state) {
    return state.bookId;
  },
  getAddress(state) {
    return state.address;
  },
};

const mutations = {
  setMutateHandler(state, input) {
    let response = input.response;
    let type = input.type;
    state[type] = response;
  },
  setRemoveBook(state, id) {
    let list = state.bookList;
    let indexOfBook = list.findIndex((book) => book.id == id);
    list.splice(indexOfBook, 1);
    state.bookList = list;
  },
  setBookSelect(state) {
    let arr = state.bookList;
    let key = "bookName";
    let newObj = arr.map(function (item) {
      return item[key];
    });
    state.bookSelectObj = newObj;
  },
  setBookId(state, bookName) {
    let list = state.bookList;
    let book = list.find((book) => book.bookName == bookName);
    state.bookId = book.id;
  },
  updateUserList(state, id) {
    state.bookList.forEach((book) => {
      if (book.id == id) {
        book.userIdentityNumber = "";
        return;
      }
    });
  },
  setUserAddress(state, { vm, bookName }) {
    // console.log("bookName ", bookName)
    let list = state.userList;
    // console.log("list ", list)

    let user = list.find((user) => user.bookName == bookName);
    // console.log("user ", user)
    if (user) {
      state.address = user.address;
      vm.$toastr("success", `${bookName} has been getted from user`, "GETTED!");
    } else {
      state.address = "";
      vm.$toastr("error", `${bookName} is in library`, "ERROR!");
    }
  },
};

const actions = {
  async getBookListAction({ commit }) {
    const { data, error } = await request(`/books`, "get");
    if (data) {
      // console.log(data, error)
      let input = {
        response: data,
        type: "bookList",
      };
      commit("setMutateHandler", input);
    }
  },
  async removeBookAction({ commit }, { vm, id, name }) {
    // console.log("id ", id);
    const { data, error } = await request(`/books/` + id, "delete");
    if (data) {
      // console.log(data, error, id)
      vm.$toastr("success", `${name} deleted`, "DELETED!");
    } else {
      console.log(data, error);
      vm.$toastr("error", `${name} could not be removed`, "ERROR!");
    }
    commit("setRemoveBook", id);
  },
  async addBookAction({ commit }, { vm, formObject }) {
    const { data, error } = await request(`/books`, "post", formObject);
    if (data) {
      // console.log(data, error);
      vm.$toastr("success", `${formObject.bookName} Added`, "ADDED!");
      vm.$formulate.reset("addBook");
    } else {
      console.log(data, error);
      vm.$toastr("error", "Book could not be added", "ERROR!");
    }
    // commit("setRemoveBook", id)
  },
  getBookSelectAction({ commit }) {
    commit("setBookSelect");
  },
  async setToUserAction({ commit }, { vm, formObject }) {
    const { data, error } = await request(`/users`, "post", formObject);
    if (data) {
      // console.log(data, error);
      vm.$toastr(
        "success",
        `${formObject.bookName} setted to ${formObject.fullName}`,
        "SETTED!"
      );
      vm.$formulate.reset("setToUser");
    } else {
      // console.log(data, error);
      vm.$toastr("error", "Book could not be setted", "ERROR!");
    }
  },
  findBookIdAction({ commit }, bookName) {
    commit("setBookId", bookName);
  },
  async updateBookIdentityAction({ commit }, { bookId, userIdentityNumber }) {
    // id ye g??re patch edip, identityNumber'?? de??i??tir

    const { data, error } = await request(`/books/${bookId}`, "patch", {
      userIdentityNumber,
    });
    if (data) {
      // console.log(data, error);
      // vm.$toastr('success', `${name} deleted`, 'DELETED!')
    } else {
      console.log(data, error);
      // vm.$toastr('error', `${name} could not be removed`, 'ERROR!')
    }
  },
  async takeBookBackAction({ commit }, { vm, id }) {
    const { data, error } = await request(`/books/${id}`, "patch", {
      userIdentityNumber: "",
    });
    if (data) {
      // console.log(data, error);
      // vm.$toastr("success", `Status updated`, "UPDATED!");
      commit("updateUserList", id);
    } else {
      console.log(data, error);
      vm.$toastr("error", `Status could not be updated`, "ERROR!");
    }
  },
  async getUserListAction({ commit }) {
    const { data, error } = await request(`/users`, "get");
    if (data) {
      // console.log(data, error);
      let input = {
        response: data,
        type: "userList",
      };
      commit("setMutateHandler", input);
    }
  },
  findUserAddressAction({ commit }, { vm, bookName }) {
    commit("setUserAddress", { vm, bookName });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};

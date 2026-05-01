import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const useTodoStore = create(
  persist(
    immer((set) => ({
      todos: [
        {
          id: globalThis.crypto.randomUUID(),
          title: "طراحی رابط کاربری صفحه اصلی",
          status: "todo",
        },
        {
          id: globalThis.crypto.randomUUID(),
          title: "نوشتن مستندات API",
          status: "todo",
        },
        {
          id: globalThis.crypto.randomUUID(),
          title: "بررسی و رفع باگ‌های گزارش شده",
          status: "todo",
        },
        {
          id: globalThis.crypto.randomUUID(),
          title: "پیاده‌سازی سیستم احراز هویت",
          status: "doing",
        },
        {
          id: globalThis.crypto.randomUUID(),
          title: "بهینه‌سازی کوئری‌های دیتابیس",
          status: "doing",
        },
        {
          id: globalThis.crypto.randomUUID(),
          title: "تست واحد کامپوننت‌های React",
          status: "done",
        },
        {
          id: globalThis.crypto.randomUUID(),
          title: "راه‌اندازی سرور تست",
          status: "done",
        },
        {
          id: globalThis.crypto.randomUUID(),
          title: "ایجاد صفحه پروفایل کاربری",
          status: "done",
        },
      ],

      addTodo: (newTitle) =>
        set((state) => {
          state.todos.push({
            id: globalThis.crypto.randomUUID(),
            title: newTitle,
            status: "todo",
          });
        }),

      removeTodo: (id) =>
        set((state) => {
          state.todos = state.todos.filter((t) => t.id !== id);
        }),

      changeStatus: (id, newStatus) =>
        set((state) => {
          const todo = state.todos.find((t) => t.id === id);
          if (todo) {
            todo.status = newStatus;
          }
        }),
    })),
    {
      name: "todos",
    },
  ),
);

export default useTodoStore;

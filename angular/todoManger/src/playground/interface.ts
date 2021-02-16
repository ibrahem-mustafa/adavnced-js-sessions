interface TODO_INTERFACE {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
  hasCompleted: () => boolean;
  updateCompletedStatus: () => void;
}

// const todo: Todo = {
//   id: 1,
//   userId: 1, title: 'test',
//   completed: false,
//   hasCompleted() {
//     return this.completed
//   },
//   updateCompletedStatus() {
//     this.completed = !this.completed
//   }
// }

class Todo implements TODO_INTERFACE {
  id: number;
  userId: number;
  title: string;
  completed: boolean;

  constructor(id: number, userId: number, title: string, completed: boolean) {
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.completed=completed;
  }

  hasCompleted() {
    return this.completed;
  }

  updateCompletedStatus() {
    this.completed = !this.completed;
  };

}

class Todo2 extends Todo {
  userImage: string;
  constructor(
    id: number,
    userId: number,
    title: string,
    completed: boolean,
    userImage: string
  ) {
    super(id, userId, title, completed);
    this.userImage = userImage;
  }
}


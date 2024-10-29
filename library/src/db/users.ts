interface Email {
  value: string;
}

interface UserRecord {
  id: number;
  username: string;
  password: string;
  displayName: string;
  emails: Email[];
}

const records: UserRecord[] = [
  {
    id: 1,
    username: "user",
    password: "123456",
    displayName: "demo user",
    emails: [{ value: "user@mail.ru" }]
  },
  {
    id: 2,
    username: "user2",
    password: "123456",
    displayName: "demo user2",
    emails: [{ value: "user2@mail.ru" }]
  }
];

// Функция для поиска пользователя по ID
const findById = (id: number, cb: (error: Error | null, user?: UserRecord) => void): void => {
  process.nextTick(() => {
    const idx = id - 1;
    if (records[idx]) {
      console.log(`Пользователь по id найден: ${records[idx]}`);
      cb(null, records[idx]);
    } else {
      console.log('Пользователь по id не найден');
      cb(new Error(`User ${id} does not exist`));
    }
  });
};

// Функция для поиска пользователя по имени
const findByUsername = (username: string, cb: (error: Error | null, user?: UserRecord | null) => void): void => {
  process.nextTick(() => {
    const user = records.find(record => record.username === username);
    if (user) {
      console.log('Пользователь найден -> findByUsername');
      return cb(null, user);
    }
    console.log('Пользователь не найден -> findByUsername');
    return cb(null, null);
  });
};

// Функция для проверки пароля пользователя
const verifyPassword = (user: UserRecord, password: string): boolean => {
  return user.password === password;
};

export default {findById, findByUsername, verifyPassword}
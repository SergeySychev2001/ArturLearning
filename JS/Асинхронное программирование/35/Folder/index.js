//1. Состояние через промисы
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, name: "John" };
      resolve(data);
      // reject(new Error("Failed to fetch")); // Uncomment to simulate an error
    }, 1000);
  });
}

fetchData()
  .then((data) => {
    console.log("Data received:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
// Объяснение:
// В этом примере `fetchData` возвращает промис, который становится успешным (fulfilled) через 1 секунду.
// Промис позволяет отслеживать результаты и состояния асинхронной операции.

//2. Объект состояния
const state = {
  loading: false,
  data: null,
  error: null,
};

async function fetchData() {
  state.loading = true;
  try {
    const response = await fetch("https://api.example.com/data");
    state.data = await response.json();
  } catch (err) {
    state.error = err.message;
  } finally {
    state.loading = false;
  }

  console.log("State:", state);
}

fetchData();
// Объяснение:
// Здесь мы создаем объект `state`, который отслеживает состояние загрузки, данные и ошибки.
// Это позволяет легче управлять и отслеживать состояние во время выполнения асинхронной операции.



//3. Redux и другие библиотеки управления состоянием
export const fetchDataStart = () => ({ type: 'FETCH_DATA_START' });
export const fetchDataSuccess = (data) => ({ type: 'FETCH_DATA_SUCCESS', payload: data });
export const fetchDataFailure = (error) => ({ type: 'FETCH_DATA_FAILURE', payload: error });

// reducer.js
const initialState = {
    loading: false,
    data: null,
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_DATA_START':
            return { ...state, loading: true, error: null };
        case 'FETCH_DATA_SUCCESS':
            return { ...state, loading: false, data: action.payload };
        case 'FETCH_DATA_FAILURE':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

// usage in a component
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const MyComponent = () => {
    const dispatch = useDispatch();
    const { loading, data, error } = useSelector(state => state);

    useEffect(() => {
        const fetchData = async () => {
            dispatch(fetchDataStart());
            try {
                const response = await fetch('https://api.example.com/data');
                const result = await response.json();
                dispatch(fetchDataSuccess(result));
            } catch (err) {
                dispatch(fetchDataFailure(err.message));
            }
        };

        fetchData();
    }, [dispatch]);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </div>
    );
};
// Объяснение:
// В этом примере мы используем Redux для управления состоянием асинхронной операции. 
// Мы определяем действия (actions) и редюсер (reducer), которые управляют состоянием приложения в 
// зависимости от статуса асинхронной загрузки данных.



//4. Отложенное состояние (Deferred State)
const fetchData = async () => {
    const loading = true;
    let data = null;
    let error = null;

    try {
        const response = await fetch('https://api.example.com/data');
        data = await response.json();
    } catch (err) {
        error = err.message;
    } finally {
        loading = false;
    }

    return { loading, data, error };
};

// usage
const { loading, data, error } = await fetchData();
// Объяснение:
// В этом примере статус асинхронной операции — загрузка, успешное получение или ошибка — управляется отдельно
// что позволяет проще контролировать, что отображается пользователю в зависимости от состояния.


//5. Композиция функций
const fetchData = async () => {
    const response = await fetch('https://api.example.com/data');
    return await response.json();
};

const updateUI = (data) => {
    console.log('Update UI with:', data);
};

const handleError = (error) => {
    console.error('Error fetching data:', error);
};

const fetchDataAndUpdateUI = async () => {
    try {
        const data = await fetchData();
        updateUI(data);
    } catch (error) {
        handleError(error);
    }
};

fetchDataAndUpdateUI();
// Объяснение:
// В этом примере раздельные функции облегчают управление состоянием асинхронных операций, следя за 
// потоками данных и ошибок, а также отображая информацию в интерфейсе.

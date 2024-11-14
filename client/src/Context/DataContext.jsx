import { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [rowData, setRowData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setRowData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const deletePost = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
        })
            .then(() => {
                setRowData(prevData => prevData.filter(post => post.id !== id));
                console.log(`Deleted post with ID: ${id}`);
            })
            .catch((error) => console.error('Error deleting post:', error));
    };

    const updatePost = (id, updatedData) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        })
            .then((response) => response.json())
            .then((updatedPost) => {
                setRowData(prevData =>
                    prevData.map(post => (post.id === id ? { ...post, ...updatedData } : post))
                );
                console.log(`Updated post with ID: ${id}`, updatedPost);
            })
            .catch((error) => console.error('Error updating post:', error));
    };

    return (
        <DataContext.Provider value={{ rowData, deletePost, updatePost }}>
            {children}
        </DataContext.Provider>
    );
};

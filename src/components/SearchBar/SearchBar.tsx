import toast from "react-hot-toast";

import { useState, FormEvent, ChangeEvent } from "react";


import css from "./SearchBar.module.css";
import { SearchFormProps } from "./SearchBar.types";

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
    const [topic, setTopic] = useState<string>("");

    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        const form = evt.target as HTMLFormElement;

        if (topic.trim() === "") {
            toast.error("Please enter a search term!");
            return;
        }

        onSearch(topic);
        form.reset();
    };

    const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
        setTopic(evt.target.value);
    };

    return (
        <header className={css["header"]}>
            <form onSubmit={handleSubmit} className={css["form-container"]}>
                <input
                    name="topic"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images..."
                    value={topic}
                    onChange={handleChange}
                    className={css["search-input"]}
                />
                <button type="submit" className={css["search-btn"]}>
                    Search
                </button>
            </form>
        </header>
    );
};

export default SearchForm;
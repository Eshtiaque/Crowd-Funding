import React, { useState, useMemo } from 'react';
import JoditEditor from 'jodit-react';

const WordInput = () => {
    const [content, setContent] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    const config = useMemo(() => {
        return {
            placeholder: isEditing ? '' : 'description',
            height: 350,
        };
    }, [isEditing]);

    const handleFocus = () => {
        setIsEditing(true);
    };

    const handleBlur = () => {
        setIsEditing(false);
    };
    const parser = new DOMParser();
    const parsedDocument = parser.parseFromString(content, 'text/html');
    const rootElement = parsedDocument.documentElement;
    const textValue = rootElement.textContent.trim();
  

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        console.log(textValue);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <JoditEditor
                    value={content}
                    tabIndex={12}
                    config={config}
                    onChange={newContent => setContent(newContent)}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
                <input className='btn btn-primary' type="submit" value="submit" />
            </form>
        </div>
    );
};

export default WordInput;

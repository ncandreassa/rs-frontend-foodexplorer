import React, { useState, useRef } from 'react';
import {
    Container,
    TagInputWrapper,
    Tag,
    TagLabel,
    RemoveIcon,
    DashedButton,
    PlusIcon,
    AddInput,
} from './styles';

export function IngredientInput({ label }) {

    const [tags, setTags] = useState([]);
    const [editing, setEditing] = useState(false);
    const [value, setValue] = useState('');
    const inputRef = useRef(null);

    const addTag = () => {
        if (!value.trim()) return;
        setTags([...tags, value.trim()]);
        setValue('');
    };

    const removeTag = (idx) => setTags(tags.filter((_, i) => i !== idx));

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addTag();
            setEditing(false);
        } else if (e.key === 'Escape') {
            setEditing(false);
            setValue('');
        }
    };

    const startEditing = () => {
        setEditing(true);
        setTimeout(() => inputRef.current?.focus(), 0);
    };

    return (
        <Container>{
            label && <label>{label}</label>}

            <TagInputWrapper>
                {tags.map((t, idx) => (
                    <Tag key={idx}>
                        <TagLabel>{t}</TagLabel>
                        <RemoveIcon onClick={() => removeTag(idx)} />
                    </Tag>
                ))}

                {editing ? (
                    <AddInput
                        ref={inputRef}
                        value={value}
                        placeholder=""
                        onChange={(e) => setValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        onBlur={() => {
                            addTag();
                            setEditing(false);
                        }}
                    />
                ) : (
                    <DashedButton onClick={startEditing} $editing={editing}>
                        Adicionar <PlusIcon />
                    </DashedButton>
                )}
            </TagInputWrapper>
        </Container>

    );
};

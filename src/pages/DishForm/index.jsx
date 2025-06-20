import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Container, Form, ButtonWrapper } from './styles'
import { InputFile } from '../../components/InputFile'
import { FiUpload } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { TextArea } from '../../components/TextArea'
import { Select } from '../../components/Select'
import { IngredientInput } from '../../components/IngredientInput'
import { FiChevronLeft } from 'react-icons/fi'
import { ButtonText } from '../../components/ButtonText'
import { useNavigate, useParams } from 'react-router-dom'
import { api } from '../../services/api'

export function DishForm() {

    const [name, setName] = useState("");
    const [category, setCategory] = useState("Refeição");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [ingredients, setIngredients] = useState([]);

    const [image, setImage] = useState(null)
    const [imageFile, setImageFile] = useState(null);

    const params = useParams();

    const { mode } = useParams();

    const navigate = useNavigate()

    const isEdit = mode === 'edit';

    const isDesktop = useMediaQuery({ minWidth: 768 })

    useEffect(() => {
        async function fetchDish() {
            const response = await api.get(`/dishes/${params.id}`)
            const dish = response.data;
            setName(dish.name);
            setCategory(dish.category);
            setPrice(dish.price);
            setDescription(dish.description);
            setIngredients(JSON.parse(dish.ingredients));
            setImage(dish.image)
        }
        if (params.id) fetchDish()
    }, []);

    async function handleUpdateDish() {
        try {
            await uploadDishImage()

            await api.put(`/dishes/${params.id}`, {
                name,
                category,
                price,
                description,
                ingredients: ingredients,
                image
            });

            alert("Prato atualizado com sucesso!");
            navigate("/");
        } catch (error) {
            console.error(error);
            alert("Erro ao atualizar o prato.");
        }
    }

    async function handleDeleteDish() {
        const confirm = window.confirm("Tem certeza que deseja excluir este prato?");

        if (!confirm) return;

        try {
            await api.delete(`/dishes/${params.id}`);
            alert("Prato excluído com sucesso!");
            navigate("/");
        } catch (error) {
            console.error(error);
            alert("Erro ao excluir o prato.");
        }
    }

    async function handleCreateDish() {
        if (!name || !price || !description || ingredients.length === 0) {
            return alert("Por favor, preencha todos os campos e adicione pelo menos um ingrediente.");
        }

        const parsedPrice = parseFloat(price.replace(",", "."));

        if (isNaN(parsedPrice)) {
            alert("Valor inválido");
            return;
        }

        const roundedPrice = Math.round(parsedPrice * 100) / 100; // garante 2 casas


        try {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("category", category);
            formData.append("price", roundedPrice);
            formData.append("description", description);
            formData.append("image", imageFile);
            formData.append("ingredients", ingredients);

            await api.post("/dishes", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });

            alert("Prato criado com sucesso!");
            navigate("/");
        } catch (error) {
            console.error(error);
            alert("Erro ao criar o prato.");
        }
    }

    async function uploadDishImage() {

        if (imageFile) {
            const fileUploadForm = new FormData();
            fileUploadForm.append("image", imageFile)
            fileUploadForm.append("dishId", params.id)

            const response = await api.patch("/dishes/image", fileUploadForm);
            setImage(response.data.image);
        }
    }

    function handleChangeImage(event) {
        const file = event.target.files[0];
        setImageFile(file);

        const imagePreview = URL.createObjectURL(file);
        setImage(imagePreview)

    }

    const handlePriceChange = (e) => {
        const value = e.target.value.replace(/[^0-9,]/g, "");
        setPrice(value);
    };

    function getImageFileTitle() {
        if (imageFile && imageFile.name) {
            return imageFile.name.length > 10
                ? imageFile.name.substring(0, 10) + "..."
                : imageFile.name;
        }

        return isEdit ? "Selecione imagem para alterá-la" : "Selecione imagem";
    }

    return (
        <Container>


            <ButtonText
                title="voltar"
                icon={FiChevronLeft}
                iconSize={34}
                onClick={() => navigate(-1)}
                fontWeight={isDesktop ? "700" : "400"}
            />

            <Form>

                <h1>{isEdit ? 'Editar prato' : 'Novo prato'}</h1>
                <InputFile
                    label="Imagem do prato"
                    title={getImageFileTitle()}
                    icon={FiUpload}
                    width={isDesktop ? "23%" : undefined}
                    onChange={handleChangeImage}
                />

                <Input
                    label={"Nome"}
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Ex.: Salada Cesar"
                    type="text"
                    bg="#0D161B"
                    width={isDesktop ? "48%" : undefined} />

                <Select
                    label={"Categoria"}
                    width={isDesktop ? "23%" : undefined}
                    value={category}
                    onChange={e => setCategory(e.target.value)} />

                <IngredientInput
                    label={"Ingredientes"}
                    width={isDesktop ? "74%" : undefined}
                    ingredients={ingredients}
                    setIngredients={setIngredients} />

                <Input
                    label={"Preço"}
                    value={price}
                    onChange={handlePriceChange}
                    placeholder="R$ 00,00"
                    type="text"
                    bg="#0D161B"
                    width={isDesktop ? "23%" : undefined} />

                <TextArea
                    label={"Descrição"}
                    placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    bg="#0D161B" />



                {isEdit ? (
                    <ButtonWrapper>
                        <Button
                            title="Excluir prato"
                            background="#0D161B"
                            onClick={handleDeleteDish}
                            width={isDesktop ? "13.4rem" : undefined}
                        />
                        <Button
                            title="Salvar alterações"
                            background="#AB4D55"
                            onClick={handleUpdateDish}
                            width={isDesktop ? "17.2rem" : undefined}
                        />
                    </ButtonWrapper>

                ) : (
                    <ButtonWrapper>
                        <Button
                            title="Salvar"
                            background="#AB4D55"
                            onClick={handleCreateDish}
                            width={isDesktop ? "17.2rem" : undefined}
                        />
                    </ButtonWrapper>

                )}

            </Form>
        </Container>
    )
}
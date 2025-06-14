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

export function DishForm() {

    const { mode } = useParams();

    const navigate = useNavigate()

    const isEdit = mode === 'edit';

    return (
        <Container>

            <ButtonText
                title="voltar"
                icon={FiChevronLeft}
                iconSize={28}
                onClick={() => navigate(-1)}
                $fontWeight="400"
                $fontSize="16px"
            />

            <Form>

                <h1>{isEdit ? 'Editar prato' : 'Novo prato'}</h1>
                <InputFile
                    label="Imagem do prato"
                    title={"Selecione imagem"}
                    icon={FiUpload}
                />

                <Input
                    label={"Nome"}
                    placeholder="Ex.: Salada Cesar"
                    type="text"
                    bg="#0D161B" />

                <Select label={"Categoria"} />

                <IngredientInput label={"Ingredientes"} />



                <Input
                    label={"Preço"}
                    placeholder="R$ 00,00"
                    type="number"
                    bg="#0D161B" />

                <TextArea
                    label={"Descrição"}
                    placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                    bg="#0D161B" />



                {isEdit ? (
                    <ButtonWrapper>
                                   <Button
                            title="Excluir prato"
                            background="#0D161B"
                            onClick={() => {
                                // lógica para excluir prato
                                console.log('Excluir prato');
                            }}
                        />
                        <Button
                            title="Salvar alterações"
                            background="#AB4D55"
                            onClick={() => {
                                // lógica para salvar alterações
                                console.log('Salvar alterações');
                            }}
                        />
                    </ButtonWrapper>
             
                ) : (
                    <Button
                        title="Salvar"
                        background="#AB4D55"
                        onClick={() => {
                            // lógica para criar prato
                            console.log('Salvar prato');
                        }}
                    />
                )}

            </Form>

        </Container>
    )
}
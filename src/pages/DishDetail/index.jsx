import { Container, Content, Image, Info, ControlsButtonWrapper, TextWrapper } from './styles'
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Tags } from '../../components/Tags'
import { DishControls } from '../../components/DishControls'
import { FiChevronLeft } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import DishImg from '../../assets/Dish.png'
import Receipt from '../../assets/icons/Receipt.png'

export function DishDetail() {
    const navigate = useNavigate()

    const tags = ['alface', 'cebola', 'pão naan', 'pepino', 'rabanete', 'tomate']

    const userType = "user"

    return (
        <Container>
            <ButtonText
                title="voltar"
                icon={FiChevronLeft}
                iconSize={34}
                onClick={() => navigate(-1)}
                $fontWeight="400"
            />


            <Content>
                <Image src={DishImg} alt={"Dish"} />

                <Info>

                    <TextWrapper>
                        <h1>Salada Ravanello</h1>
                        <p>
                            Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
                        </p>
                    </TextWrapper>



                    <Tags items={tags} />

                    <ControlsButtonWrapper>
                        {userType === "user" && (
                            <>
                                <DishControls
                                    quantity={1}
                                    onIncrement={() => { }}
                                    onDecrement={() => { }}
                                    fontSize="22px"
                                    fontWeight="700"
                                    iconSize={28}
                                />
                                <Button
                                    title="pedir ∙ R$ 25,00"
                                    $width="200px"
                                    $height="42px"
                                    $marginTop="0px"
                                    $fontSize="10px"
                                    onClick={(e) => e.stopPropagation()}
                                    image={Receipt}
                                />
                            </>
                        )}

                        {userType === "admin" && (
                            <Button
                                title="Editar prato"
                                $width="100%"
                                $height="42px"
                                $marginTop="0px"
                                $fontSize="14px"
                                onClick={() => navigate("/edit-dish")}
                            />
                        )}
                    </ControlsButtonWrapper>


                </Info>
            </Content>
        </Container>
    )
}
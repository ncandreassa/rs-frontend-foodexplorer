import { useMediaQuery } from 'react-responsive'
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

    const isDesktop = useMediaQuery({ minWidth: 768 })

    return (
        <Container>
           
                <ButtonText
                    title="voltar"
                    icon={FiChevronLeft}
                    iconSize={34}
                    onClick={() => navigate(-1)}
                    $fontWeight={isDesktop ? "700" : "400"}
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
                                    $width={isDesktop ? "162px" : "200px"}
                                    $height={isDesktop ? "48px" : "42px"}
                                    $marginTop="0px"
                                    $fontSize={isDesktop ? "14px" : "10px"}
                                    onClick={(e) => e.stopPropagation()}
                                    image={isDesktop ? undefined : Receipt}
                                />
                            </>
                        )}

                        {userType === "admin" && (
                            <Button
                                title="Editar prato"
                                $width={isDesktop ? "162px" : "200px"}
                                $height={isDesktop ? "48px" : "42px"}
                                $marginTop="0px"
                                $fontSize={isDesktop ? "14px" : "10px"}
                                onClick={() => navigate("/edit-dish")}
                            />
                        )}
                    </ControlsButtonWrapper>


                </Info>
            </Content>
        </Container>
    )
}
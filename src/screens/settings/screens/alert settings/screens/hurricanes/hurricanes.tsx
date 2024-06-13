import { NavigationProp } from "@react-navigation/native"
import Safescroll from "../../../../../../components/safescroll"
import Flex from "../../../../../../styles/components/flex"
import { sizes } from "../../../../../../utils/sizes"
import Header from "../../../../../../components/header/header"
import ResetGroup from "../../../../components/resetGroup"
import { useState } from "react"
import ReceiveGroup from "../../../../components/receiveGroup"

const HurricanesSettings = ({
    navigation
} : {
    navigation : NavigationProp<any>
}) => {
    const [recieveQuakeAlerts, setReceiveQuakeAlerts] = useState(true)

    return (
        <Safescroll>
            <Flex
                direction="column"
                gap={12}
            >
                <Flex
                    direction="column"
                    paddingHorizontal={sizes.marginSM}
                    marginTop={10}
                    gap={10}
                >
                    <Header
                        navigation={navigation}
                        title="Hurricaness"
                    />
                    <ReceiveGroup 
                        enabled={recieveQuakeAlerts}
                        setEnabled={setReceiveQuakeAlerts}
                        title="Receive Hurricanes alerts"
                    />
                    <ResetGroup 
                        title="Reset Hurricanes settings" 
                    />
                </Flex>
            </Flex>
        </Safescroll>
    )
}
export default HurricanesSettings
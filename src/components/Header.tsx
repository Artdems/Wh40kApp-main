import React, { View, TouchableOpacity , Text} from 'react-native';
import headerStyles from '../style/battleForgeStyle';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-paper';
import image from '../../src/assets/images/image';

const Header = ({ showBackIcon,  title }: { showBackIcon: boolean, title: string }) => {
    
    const navigation = useNavigation();
    
    return (
        <View>
            <View style={[headerStyles.ViewTitle, {justifyContent:"flex-start"}]}>  
                {showBackIcon ? (
                    <TouchableOpacity style={{alignItems:'center', justifyContent:'center', marginHorizontal : 10}} onPress={navigation.goBack}>
                        <Icon size={25} source={image.IcLeftArrowCalendar}  />   
                    </TouchableOpacity>
                ) : (
                    null
                )}            
                <Text style={headerStyles.title}>{title}</Text>
            </View>
        </View>
    );
}

export default Header;
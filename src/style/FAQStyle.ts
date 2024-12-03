import { StyleSheet } from 'react-native';
import theme from './theme'



const faqStyles = StyleSheet.create({

    FAQContainer: {
        borderWidth: 1,
        borderTopWidth:0,
        borderColor: theme.colors.LightGrey,
        borderRadius: 20,
        marginHorizontal : 20,
        marginTop : 30,
        marginBottom:10,
        backgroundColor: theme.colors.PrimaryColor,
    },
    FAQQuestionVisible: {
        borderWidth: 1,
        borderTopWidth:0,
        borderColor: theme.colors.LightGrey,
        borderRadius: 20,
        margin : 20,
        marginBottom : 3,
        marginTop : 3,
        backgroundColor: theme.colors.PrimaryColor,
    },
    FAQQuestionHidden: {
        margin : 20,
        marginBottom : 3,
        marginTop : 3,
        backgroundColor: theme.colors.PrimaryColor,
    },
    FAQTitle: {
        borderWidth: 1,
        borderColor: theme.colors.LightGrey,
        backgroundColor: theme.colors.PrimaryColor,
        margin : 20,
        borderRadius: 20,
        flexDirection : 'row',
        alignItems: "center",
        justifyContent: 'space-between',
      }, 
    FAQUnSelectedTitle: {
        borderWidth: 1,
        borderColor: theme.colors.LightGrey,
        backgroundColor: theme.colors.PrimaryColor,
        borderRadius: 20,
        padding: 4,
        flexDirection : 'row',
        alignItems: "center",
        justifyContent: 'space-between',
    }, 
    FAQSelectedTitle: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: theme.colors.PrimaryColor,
        borderRadius: 20,
        padding: 4,
        flexDirection : 'row',
        alignItems: "center",
        justifyContent: 'space-between',
    },
    FAQitem: {
        borderBottomWidth: 1,
        borderColor: theme.colors.LightGrey,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection : 'row',        
        alignItems: "center",
        justifyContent: 'space-between',
    },
    FAQLastItem: {
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 5,
        flexDirection : 'row',        
        alignItems: "center",
        justifyContent: 'space-between',
    },
    SearchBar: {
        zIndex:50,
        height: 40,
        marginTop:10,
        marginBottom: 20,
        flexDirection : 'row',        
        alignItems: "center",    
        justifyContent: 'space-between',
    },
    FAQSelectedTab: {
        borderBottomWidth: 4,
        paddingLeft:5,
        paddingRight:5,
        height: 45,
        borderBottomColor: theme.colors.DonorBlue,
        borderBottomLeftRadius:2,
        borderBottomRightRadius:2
    },
    FAQUnSelectedTab: {
        borderBottomWidth: 4,
        paddingLeft:5,
        paddingRight:5,
        height: 45,
        borderBottomColor: theme.colors.LightGrey,
    },
    FAQSelectedText: {
        color: 'black',
        fontSize: theme.size.SmallSize,
        margin: 7,
        marginBottom : 10
    },
    FAQUnSelectedText: {
        color: theme.colors.LightGrey,
        fontSize: theme.size.SmallSize,
        margin: 7,
        marginBottom : 10
    },
});

export default faqStyles;
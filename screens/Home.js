import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image, Modal } from 'react-native';
import React from 'react';
import { COLORS, SIZES, FONTS, icons, images } from '../constants'
import { Svg, Polygon } from 'react-native-svg'
import { BlurView } from 'expo-blur'


const Home = () => {
    const [showAddToBagModal, setShowAddToBagModal] = React.useState(false)
    const [selectedItem, setSelectedItem] = React.useState(null)
    const [selectedSize, setSelectedSize] = React.useState("")

    const [trending, setTrending] = React.useState([
        {
            id: 0,
            name: "Nike Air Zoom Pegasus 36",
            img: images.nikePegasus36,
            bgColor: "#BF012C",
            type: "RUNNING",
            price: "$186",
            sizes: [6, 7, 8, 9, 10]
        },
        {
            id: 1,
            name: "Nike Metcon 5",
            img: images.nikeMetcon5Black,
            bgColor: "#D39C67",
            type: "TRAINING",
            price: "$135",
            sizes: [6, 7, 8, 9, 10, 11, 12]
        },
        {
            id: 2,
            name: "Nike Air Zoom Kobe 1 Proto",
            img: images.nikeZoomKobe1Proto,
            bgColor: "#7052A0",
            type: "BASKETBALL",
            price: "$199",
            sizes: [6, 7, 8, 9]
        },
    ]);
    const [recentlyViewed, setRecentlyViewed] = React.useState([
        {
            id: 0,
            name: "Nike Metcon 4",
            img: images.nikeMetcon4,
            bgColor: "#414045",
            type: "TRAINING",
            price: "$119",
            sizes: [6, 7, 8]
        },
        {
            id: 1,
            name: "Nike Metcon 6",
            img: images.nikeMetcon6,
            bgColor: "#4EABA6",
            type: "TRAINING",
            price: "$135",
            sizes: [6, 7, 8, 9, 10, 11]
        },
        {
            id: 2,
            name: "Nike Metcon 5",
            img: images.nikeMetcon5Purple,
            bgColor: "#2B4660",
            type: "TRAINING",
            price: "$124",
            sizes: [6, 7, 8, 9]
        },
        {
            id: 3,
            name: "Nike Metcon 3",
            img: images.nikeMetcon3,
            bgColor: "#A69285",
            type: "TRAINING",
            price: "$99",
            sizes: [6, 7, 8, 9, 10, 11, 12, 13]
        },
        {
            id: 4,
            name: "Nike Metcon Free",
            img: images.nikeMetconFree,
            bgColor: "#A02E41",
            type: "TRAINING",
            price: "$108",
            sizes: [6, 7, 8, 9, 10, 11]
        },
    ]);
    const renderTrendingShoes = () => {

        const renderShoe = (item, index) => {
            var trendingStyle = {}
            if (index == 0) {
                trendingStyle = { marginLeft: SIZES.padding * 2 }
            }

            return (
                <TouchableOpacity
                    style={{ width: 180, height: 240, justifyContent: "center", marginHorizontal: SIZES.base, ...trendingStyle, }}
                    onPress={() => {
                        setSelectedItem(item)
                        setShowAddToBagModal(true)
                    }}
                >
                    <View
                        style={{}}
                    >
                        <Text style={{ color: COLORS.gray, ...FONTS.h5 }}>{item.type}</Text>
                    </View>
                    <View
                        style={[{
                            flex: 1,
                            justifyContent: "flex-end",
                            marginTop: SIZES.base,
                            marginRight: SIZES.padding * 2,
                            borderRadius: SIZES.radius * .5,
                            backgroundColor: item.bgColor,
                            paddingLeft: SIZES.padding2,
                            paddingRight: SIZES.padding * 2,
                            paddingBottom: SIZES.padding2,
                        }, styles.trendingShadow]}
                    >
                        <View
                            style={{ height: "35%", justifyContent: "space-between", }}
                        >
                            <Text style={{ color: COLORS.white, ...FONTS.body4 }}>{item.name}</Text>
                            <Text style={{ color: COLORS.white, ...FONTS.h3 }}>{item.price}</Text>
                        </View>
                    </View>
                    <View
                        style={{ position: "absolute", top: 27, right: 0, width: "95%", height: "100%" }}
                    >
                        <Svg
                            width="100%" height="100%"
                        >
                            <Polygon
                                points="0, 0, 160, 0, 160, 80"
                                fill="white"
                            />
                        </Svg>
                    </View>
                    <Image
                        source={item.img}
                        resizeMode='cover'
                        style={{
                            width: "98%",
                            height: 80,
                            position: "absolute",
                            top: 50,
                            right: 0,
                            transform: [
                                { rotate: "-15deg" }
                            ]
                        }}
                    />
                </TouchableOpacity>
            )
        };
        return (
            <View style={{ height: 260, marginTop: SIZES.padding2 }}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={trending}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item, index }) => renderShoe(item, index)}
                />
            </View>
        )
    }

    const renderShoeSizes= () => {
        return(
            selectedItem.sizes.map((item, index) => {
                return(
                    <TouchableOpacity
                        key={index}
                        style={{
                            width:35,
                            height:25,
                            justifyContent:"center",
                            alignItems:"center",
                            marginHorizontal:SIZES.base*.5,
                            marginBottom:SIZES.padding,
                            borderWidth:1,
                            borderColor:COLORS.white,
                            borderRadius:5,
                            backgroundColor: selectedItem.sizes[index] == selectedSize ? COLORS.white : null
                        }}
                        onPress={() => setSelectedSize(item)}
                    >
                        <Text 
                            style={{
                                color:selectedItem.sizes[index] == selectedSize ? COLORS.black:COLORS.white, 
                                ...FONTS.body4
                            }}
                        >{item}</Text>
                    </TouchableOpacity>
                )
            })
        )
    }

    const renderRecentViewed = () => {

        const renderRecentlyViewedItem = (item, index) => {
            return (
                <TouchableOpacity
                    style={{ flex: 1, flexDirection: "row", }}
                    onPress={() => {
                        setShowAddToBagModal(true)
                        setSelectedItem(item)
                    }}
                >
                    <View
                        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
                    >
                        <Image
                            source={item.img}
                            resizeMode='contain'
                            style={{
                                width: 130,
                                height: 100,
                            }}
                        />
                    </View>
                    <View
                        style={{ flex: 1.3, marginLeft: SIZES.padding2, justifyContent: "center" }}
                    >
                        <Text style={{ color: COLORS.darkGray, ...FONTS.body3 }}>{item.name}</Text>
                        <Text style={{ ...FONTS.h3 }}>$ {item.price}</Text>
                    </View>
                </TouchableOpacity>
            )
        }
        return (
            <View
                style={[{
                    flex: 1,
                    flexDirection: "row",
                    marginTop: SIZES.padding * 2,
                    borderTopLeftRadius: SIZES.radius,
                    borderTopRightRadius: SIZES.radius,
                }, styles.recentContainerShadow]}
            >
                <View
                    style={{
                        width: 70,
                        height: "100%",
                        marginTop: SIZES.base,
                    }}
                >
                    <Image
                        source={images.recentlyViewedLabel}
                        resizeMode='contain'
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                    />
                </View>
                <View
                    style={{ flex: 1, paddingBottom: SIZES.padding * 2 }}
                >
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={recentlyViewed}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item, index }) => renderRecentlyViewedItem(item, index)}
                    />

                </View>
                {selectedItem &&
                    <Modal
                        animationType='slide'
                        transparent={true}
                        visible={showAddToBagModal}
                    >
                        <BlurView
                            intensity={40}
                            tint='light'
                            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
                        >
                            <TouchableOpacity
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                }}
                                onPress={() => {
                                    setShowAddToBagModal(false)
                                    setSelectedItem(null)
                                    setSelectedSize("")
                                }}
                            >
                            </TouchableOpacity>

                            <View
                                style={{ justifyContent: "center", width: "85%", backgroundColor: selectedItem.bgColor }}
                            >
                                <View
                                    style={{ justifyContent: "center", alignItems: "center", marginTop: -SIZES.padding * 5 }}
                                >
                                    <Image
                                        source={selectedItem.img}
                                        resizeMode='contain'
                                        style={{
                                            width: "90%",
                                            height: 170,
                                            transform: [
                                                { rotate: "-15deg" }
                                            ]
                                        }}
                                    />
                                </View>
                                <Text
                                    style={{ marginTop: SIZES.padding * 2, marginHorizontal: SIZES.padding * 2, color: COLORS.white, ...FONTS.body2 }}
                                >
                                    {selectedItem.name}
                                </Text>
                                <Text
                                    style={{ marginTop: SIZES.base * .5, marginHorizontal: SIZES.padding * 2, color: COLORS.white, ...FONTS.body3 }}
                                >
                                    {selectedItem.type}
                                </Text>
                                <Text
                                    style={{ marginTop: SIZES.padding2, marginHorizontal: SIZES.padding * 2, color: COLORS.white, ...FONTS.h1 }}

                                >{selectedItem.price}</Text>
                                <View 
                                    style={{marginTop:SIZES.padding2, marginHorizontal:SIZES.padding*2, flexDirection:"row"}}
                                >
                                    <View>
                                        <Text
                                            style={{ color: COLORS.white, ...FONTS.body3 }}
                                        >Selected Size</Text>
                                    </View>
                                    <View
                                        style={{ flexDirection:"row", flexWrap:"wrap",flex:1, marginLeft:SIZES.padding2,}}
                                    >
                                        {renderShoeSizes()}
                                    </View>
                                </View>


                                <TouchableOpacity
                                    style={{
                                        width: "100%",
                                        height: 70,
                                        marginTop: SIZES.base,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        backgroundColor: "rgba(0,0,0,0.5)"
                                    }}
                                    onPress={() => {
                                        setShowAddToBagModal(false)
                                        setSelectedItem(null)
                                        setSelectedSize("")
                                    }}
                                >
                                    <Text style={{ color: COLORS.white, ...FONTS.largeTitleBold }}>Add to bag</Text>
                                </TouchableOpacity>
                            </View>
                        </BlurView>
                    </Modal>
                }
            </View>
        );
    }
    const renderTitle = () => (
        <View style={{ marginTop: SIZES.padding2, marginHorizontal: SIZES.padding * 2, }}>
            <Text style={{ ...FONTS.largeTitleBold }}>TRENDING</Text>
        </View>
    )
    return (
        <View style={styles.container}>
            {renderTitle()}
            {renderTrendingShoes(trending)}
            {renderRecentViewed()}
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    trendingShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    recentContainerShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
    }
});


export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ex neque, tristique non scelerisque lacinia, imperdiet nec tellus. Aenean et eros ut nunc pellentesque iaculis quis vitae nibh. Aliquam in nunc eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse massa justo, placerat in est non, volutpat bibendum ligula.',
            picture: null,
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Aenean dignissim felis nec urna feugiat eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris ullamcorper imperdiet sapien. Suspendisse viverra neque in mi porttitor, eget pretium mauris ornare.',
            picture: null,
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Nulla eget leo vitae purus cursus malesuada. Aliquam erat volutpat. Phasellus non eros est. Etiam luctus erat aliquam nulla pharetra fermentum. Phasellus fermentum lorem finibus, vulputate magna id, laoreet lectus. In ac aliquam lorem. Maecenas scelerisque vestibulum justo, ut venenatis mi consequat nec. ',
            picture: null,
        }
    ]
})
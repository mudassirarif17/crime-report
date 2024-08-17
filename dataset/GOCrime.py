import streamlit as st
st.sidebar.title("GOCRIME")
st.title("Total Number Of Murders Each Year District Wise")
st.code('''
# Numbers Of Murder Each Year 
df.groupby(['Year','District'])['Murder '].sum().plot(kind='barh')
plt.title('Number Of Murbers Each Year District Wise')
plt.xlabel('Year')
plt.ylabel('Murders')
plt.legend(loc='upper right')
plt.show()
''')
st.image('first.jpeg')

st.title('Numbers Of Target Killing Each Year District Wise')
st.code('''
df.groupby(['Year','District'])['Murder Inform of Target Killing'].sum().plot(kind='barh',color='black')
plt.title('Number Of Target Killing Each Year District Wise')
plt.xlabel('Target Killing')
plt.legend(loc='upper right')
plt.show()
''')
st.image('second.jpeg')

st.title('Sucide Bombing In Pakistan')
st.code('''
df.groupby(['Year','District'])['Suide Bombing'].sum().plot(kind='barh')
''')
st.image('third.jpeg')

st.title('Highway Robbery Year and District Wise')
st.code('''
df.groupby(['Year','District'])['Highway Robbery'].sum().plot(kind='barh',color='purple')
plt.title('Number Of HighWay Robbery Each Year District Wise')
plt.xlabel('Highway Robbery')
plt.ylabel('Year / District')
plt.legend(loc='upper right')
plt.show()
''')
st.image('fore.jpeg')

st.title('Gang Rape Each Year District Wise')
st.code('''
df.groupby(['Year','District'])['Gang Rape'].sum().plot(kind='barh',color='orange')
plt.title('Number Of Gang Rape Each Year District Wise')
plt.xlabel('Gang Rape')
plt.ylabel('Year / District')
plt.legend(loc='upper right')
plt.show()
''')
st.image('five.jpeg')

st.title('Number Of Car Snatching Each Year District Wise')
st.code('''
df.groupby(['Year','District'])['Car Snatching'].sum().plot(kind='barh')
plt.title('Number Of Car Snatching Each Year District Wise')
plt.xlabel('Car Snatching')
plt.ylabel('Year / District')
plt.legend(loc='upper right')
plt.show()
''')
st.image('six.jpeg')


st.title('Number Of Bank Robbery Each Year District Wise')
st.code('''
df.groupby(['Year','District'])['Bank Robbery'].sum().plot(kind='barh',color='Blue')
plt.title('Number Of Bank Robbery Each Year District Wise')
plt.xlabel('Bank Robbery')
plt.ylabel('Year / District')
plt.legend(loc='upper right')
plt.show()
''')
st.image('seven.jpeg')



st.title('Total Number Of Murders Each Month Combine 5 Year Data')
st.code('''
df.groupby('Month')['Murder '].sum().plot(kind='barh',color='brown')
plt.title('Number Of Bank Robbery Each Year District Wise')
plt.xlabel('Bank Robbery')
plt.ylabel('Year / District')
plt.legend(loc='upper right')
plt.show()
''')


st.title("Observations : ")
st.write("1)  No Suicide Bombing In Pakistan In past 5 Years (2019,2020,2021,2022,2023)")
st.write("2)  There was 2,170 Murders Happend In past 5 Years (2019,2020,2021,2022,2023)")
st.write("3)  There was 4 Target KillingMurders Happend In past 5 Years (2019,2020,2021,2022,2023)")
st.write("4)  There was 24 Bank Robberies Happend In  past 5 Years (2019,2020,2021,2022,2023)")
st.write("5)  There was 65 HighWay Robberies Happend In past 5 Years (2019,2020,2021,2022,2023)")
st.write("6)  There was 548 Car Snatching Happend In past 5 Years (2019,2020,2021,2022,2023)")





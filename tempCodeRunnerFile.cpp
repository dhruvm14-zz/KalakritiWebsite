#include<iostream>
using namespace std;


void Reverse(int arr[],int i,int j){
    while(i<j){
        swap(arr[i],arr[j]);
        j--;
        i++;
    }
}

int main(){
    int t;
    cin>>t;
    while(t--){
        int n;
        cin>>n;
        int arr[n];
        for(int i=0;i<n;i++){cin>>arr[i];}
        int cost = 0;
        for(int i=0;i<n;i++){
            int min = i;
            for(int j =i;j<n;j++){
                if(arr[j]<arr[min])min=j;
            }
            cost+=min-i+1;
            Reverse(arr,i,min);
        }
        cout<<cost<<endl;
    }
    return 0;
}
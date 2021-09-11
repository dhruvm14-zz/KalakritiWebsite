#include <iostream>
using namespace std;



int main(){
    
    int a[8];


    for(int i = 0;i < 8;i++){
        cin>>a[i];
       
    }
    int r = 7;
    int l = 0;

    while(l<=r){

        while(r>=0 and a[r]>=0 ){
            r--;
        }
        while(l<8 and a[l]<0 ){
            l++;
        }

        if(l>r)break;

        swap(a[r],a[l]);

    }

    for(int i = 0;i < 8;i++){
        cout<<a[i]<<" ";
       
    }
    

    return 0;
}


//-55 -2 -5 -4 11 3 44 66



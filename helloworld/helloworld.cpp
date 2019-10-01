#include <iostream>
#include <vector>
#include <string>
#include<stdio.h>

using namespace std;

int main()
{
    vector<string> msg(5,"cccc");

    vector<string>::iterator ite = msg.begin();
    for (ite; ite != msg.end(); ite++)
    {
        cout << *ite << " ";
    }
    cout << endl;
    int a;
    scanf("%d",&a);
    
}
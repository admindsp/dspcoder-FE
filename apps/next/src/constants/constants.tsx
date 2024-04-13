export const LANGUAGE_VERSIONS = {
  javascript: { name: "JavaScript", version: "18.15.0" },
  typescript: { name: "TypeScript", version: "5.0.3" },
  python: { name: "Python", version: "3.10.0" },
  java: { name: "Java", version: "15.0.2" },
  cpp: { name: "C++", version: "10.2.0" },
};

export const CODE_SNIPPETS = {
  javascript: `function main() {
  console.log("Hello World!");
}

main();\n`,
  typescript: `function main() {
  console.log("Hello World!");
}

main();\n`,
  python: `def main():
  print("Hello World!")

if __name__ == "__main__":
  main()\n`,
  java: `public class Main {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}\n`,
  cpp: `#include <iostream>
using namespace std;

int main() {
  cout << "Hello World" << endl;
  return 0;
}\n`,
};

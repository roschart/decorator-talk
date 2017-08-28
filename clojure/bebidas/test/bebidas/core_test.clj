(ns bebidas.core-test
  (:require [clojure.test :refer :all]
            [bebidas.core :refer :all]))

(def costes
  {:cafe 1
   :colacao 1.20
   :orujo 1
   :canela 0.15
   :soja 0.20
   :leche 0.10
   :nata 0.50})




(defn precio
  [& bebidas]
  (->> bebidas
       (map #(% costes))
       (apply +)))

(defn close? [x y]
  (< (Math/abs (- x y))
     0.0001))


(deftest bebidas
  (testing "cafe solo."
    (is (= 1 (precio :cafe))))
  (testing "colacao."
    (is (= 1.2 (precio :colacao))))
  (testing "carajillo."
    (is (= 2 (precio :cafe :orujo))))
  (testing "Colacao con canela."
    (is (close? 1.35 (precio :colacao :canela))))
  (testing "desayuno jose."
    (is (= 1.20 (precio :cafe :soja))))
  (testing "vienes."
    (is (= 1.6 (precio :cafe :leche :nata))))
  (testing "especial."
    (is (= 2.70 (precio :cafe :leche :leche :nata :orujo)))))
